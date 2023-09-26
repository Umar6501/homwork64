import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Modal.css";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  // const [position, setPosition] = useState("ReactJs Developer");
  // const [typePosition, setTypePosition] = useState("junior");
  const [salary, setSalary] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  return (
    <header>
      <div className="content">
        <Form className="d-flex search">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Form.Select className="select-fg">
          <option value="junior">Male</option>
          <option value="middle">Famale</option>
        </Form.Select>
        <Button variant="primary" onClick={handleShow} className="ff">
          Add Students
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Firstname</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
              // type="text"
              // value={lastName}
              // onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="birthDate">
              <Form.Label>Phone</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-3" controlId="typePosition">
              <Form.Label>Male</Form.Label>
              <Form.Select
              // value={typePosition}
              // onChange={(e) => setTypePosition(e.target.value)}
              >
                <option value="junior">male</option>
                <option value="middle">famale</option>={" "}
              </Form.Select>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </header>
  );
}

export default Example;
