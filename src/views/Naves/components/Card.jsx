import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const MyCard = ({ nave }) => {
  const history = useHistory();
  const { nombreNave, descripcionNave, idNave } = nave;
  const imgRandom = `https://source.unsplash.com/1600x900/?nature,water`;

  function toNaveView() {
    history.push({ pathname: `naves/${idNave}`, state: { nave: nave } });
  }

  return (
    <Card className="mr-2">
      <CardImg top width="100%" src={imgRandom} alt="Card image cap" />
      <CardBody>
        <CardTitle>{nombreNave}</CardTitle>
        <CardSubtitle>{idNave}</CardSubtitle>
        <CardSubtitle>{descripcionNave}</CardSubtitle>
        <CardText></CardText>
        <Button onClick={toNaveView}>Button</Button>
      </CardBody>
    </Card>
  );
};

export default MyCard;
