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
    <Card className="mr-2 bg-light border-light card-shadow ">
      <CardImg top width="100%" src={imgRandom} alt="Card image cap" />
      <CardBody>
        <div>
          <CardTitle className="h5 ">Nave: {nombreNave}</CardTitle>
        </div>
        <CardSubtitle>ID: {idNave}</CardSubtitle>
        <br />
        <CardSubtitle className="border-car">
          Descripcion:
          <br /> {descripcionNave}
        </CardSubtitle>
        <CardSubtitle className="p">
          <br />
          Ubicacion: <br />
          {rutaNave}
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
