import React, { useState } from 'react';
import {Button,Form,Modal} from 'react-bootstrap';


const AddContact = (props) => {
    const [show, setShow] = useState(false);
    const [inputs,setInputs]=useState([
        {
            id:3,
            name:"",
            phoneNumber:"",
            address:"",
            email:"",
            posturl:""
          },
])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
       setInputs ({...inputs,[e.target.name]:e.target.value})
    }
const handleSave=()=>{
    props.handleAddContact(inputs)
    setInputs(   {
        id:3,
        name:"",
        phoneNumber:"",
        address:"",
        email:"",
        posturl:""
      },)
      handleClose()

}
  return (
    <div>
<Button variant="primary" onClick={handleShow}>
       ADD Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>id</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your id"
                name="id"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your name"
                name="name"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>phoneNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your phoneNumber"
                name="phoneNumber"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>address</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your address"
                name="address"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posturl</Form.Label>
              <Form.Control
                type="text"
                placeholder="put your posturl"
                name="posturl"
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddContact