import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../reducers/todoReducer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const ItemModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { date } = useSelector((state) => state.todoItems);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="taskForm">
              <Form.Label>Todo Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Todo Item"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addTodoItem({
                  name: name,
                  key: Math.random()
                    .toString(36)
                    .replace(/[^a-z]+/g, "")
                    .substr(2, 10),
                  deadline: date,
                  clicked: false,
                })
              );
              setName("");
              handleClose();
            }}
          >
            Create Task
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemModal;
