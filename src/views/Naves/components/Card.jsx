import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Card.css';

const MyCard = ({ nave }) => {
  const history = useHistory();
  const { nombreNave, descripcionNave, idNave, rutaNave } = nave;
  const imgRandom = `https://source.unsplash.com/1600x900/?nature,water`;

  function toNaveView() {
    history.push({ pathname: `naves/${idNave}`, state: { nave: nave } });
  }

  return (
    <Card className="mr-3 bg-light border-light card-shadow ">
      <CardImg top width="100%" src={imgRandom} alt="Card image cap" />
      <CardBody>
        <div>
          <CardTitle className="h5 ">
            <div className="d-flex align-items-center">
              <h4 className="dinBold">{nombreNave}</h4>
              <h5 className="ml-auto">{idNave}</h5>
            </div>
          </CardTitle>
        </div>
        <CardSubtitle className="border-car mb-5">{descripcionNave}</CardSubtitle>
        <CardSubtitle className="p mb-2 text-right ml-auto locate">
          <i>{rutaNave}</i>
        </CardSubtitle>
        <CardText></CardText>
        <Button onClick={toNaveView} className="btn-block" color="info">
          DATOS
        </Button>
      </CardBody>
    </Card>
  );
};

export default MyCard;
