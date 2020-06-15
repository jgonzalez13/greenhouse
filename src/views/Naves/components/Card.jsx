import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import FormNave from './Forms/FormNave';
import ModalDelete from 'shared/ModalDelete';
import Modal from 'shared/FormModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { NaveValidations } from './Forms/NaveValidation';
import './Card.css';

const MyCard = ({ nave }) => {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const history = useHistory();
  const { nombreNave, idNave, rutaNave } = nave;
  const imgRandom = `https://source.unsplash.com/1600x900/?nature,water`;

  const toggleModal = () => setModal(!modal);

  const toggleModalDelete = () => setModalDelete(!modalDelete);

  function toNaveView() {
    history.push({ pathname: `naves/${idNave}`, state: { id: idNave } });
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
        <CardSubtitle className="border-car mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio culpa natus labore voluptatum odit ullam,
          debitis, consectetur amet ut asperiores eveniet eos assumenda. Ut ratione rem saepe obcaecati ullam
          nihil.
        </CardSubtitle>
        <CardSubtitle className="p mb-2 text-right ml-auto locate">
          <i>{rutaNave}</i>
        </CardSubtitle>
        <Button onClick={toNaveView} className=" VerdeCoqueto btn-block " color="transparent">
          <FontAwesomeIcon icon={faEye} className="mr-2 text-center"></FontAwesomeIcon> VER DATOS
        </Button>
        <Button className="btn-block text-center" color="info" onClick={toggleModal}>
          <FontAwesomeIcon icon={faPencilAlt} className="mr-2"></FontAwesomeIcon>EDITAR
        </Button>
        <Button className="RojoCoqueto btn-block text-center" color="transparent" onClick={toggleModalDelete}>
          <FontAwesomeIcon icon={faTrash} className="mr-2"></FontAwesomeIcon> ELIMINAR
        </Button>

        <Modal
          initialValues={nave}
          modal={modal}
          toggle={toggleModal}
          title="Editar Nave"
          validationSchema={NaveValidations}
        >
          {({ values }) => <FormNave idNave={values.idNave} edit={true} />}
        </Modal>

        <ModalDelete modal={modalDelete} toggle={toggleModalDelete} title="Eliminar Nave" idNave={idNave} />
      </CardBody>
    </Card>
  );
};

export default MyCard;
