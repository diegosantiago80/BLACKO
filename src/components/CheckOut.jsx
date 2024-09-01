import { useContext, useState } from "react";
import { itemContext } from "../contexts/itemContext";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; 
import Swal from 'sweetalert2';

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const CheckOut = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, remove, reset } = useContext(itemContext);
  const navigate = useNavigate();

  const total = items.reduce((acc, act) => acc + act.Price * act.quantity, 0);

  const sendOrder = async (event) => {
    event.preventDefault(); 

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      Swal.fire({
        title: '¡Pedido Completado!',
        text: `Su pedido ID: ${docRef.id} ha sido completado.`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      reset();
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al completar su pedido. Intente nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <Container className="mt-4">
      <Button variant="danger" onClick={reset} className="mb-3">
        Vaciar Carrito
      </Button>
      {items.map((item) => (
        <Row key={item.id} className="mb-4">
          <Col md={4}>
            <img
              src={item.Imageid}
              height={150}
              alt={item.Title}
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h5>{item.Title}</h5>
            <p>Cantidad: {item.quantity}</p>
            <Button variant="danger" onClick={() => remove(item.id)}>
              Eliminar Producto
            </Button>
          </Col>
        </Row>
      ))}
  
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-4">
          <Form onSubmit={sendOrder} className="p-4 border rounded shadow-sm form-container">
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={buyer.name}
                name="name"
                placeholder="Ingrese su nombre"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                value={buyer.phone}
                name="phone"
                placeholder="Ingrese su teléfono"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={buyer.email}
                name="email"
                placeholder="Ingrese su email"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Completar Pedido
            </Button>
          </Form>
        </Col>
      </Row>
  
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="text-center">
          <h3 className="total-amount">Total: ${total}</h3>
        </Col>
      </Row>
    </Container>
  );
};

