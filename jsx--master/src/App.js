import "./App.css";
import React,{useState} from "react";
import Name from "./conponents/Name";
import Price from "./conponents/price";
import Description from "./conponents/desc";
import Img from "./conponents/img";
import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
function App() {
  const [userName, setUserName] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShowModal(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value || "";
    setUserName(name);
    handleClose();
  };
  return (
    <div className="App">
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Enter Your First Name</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={handleNameSubmit}>
            <Form.Group controlId="formName" className="m-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your first name here..."
              />
            </Form.Group>
            <Button variant="btn btn-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Card style={{ width: "18rem" }}>
        <Img variant="top" />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3>WELCOME {userName}</h3>
      {userName && <Img className="user-image" />}
      <h3 className="text-light">Hello, {userName || "there"}!</h3>
    </div>
  );
}

export default App;
