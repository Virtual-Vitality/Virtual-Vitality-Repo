import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React,{useState} from 'react';
import axios from 'axios';

const example_function8= () =>{
    //create endpoint get call
    //add handleSubmit
    //use useState to track inputs and save them to variables to input
    //into get request
    const [nameOutput, setnameOutput] =useState(``);
    const [imgOutput, setimgOutput] =useState(``)
    
  const handleSubmit = async(event) =>{
    event.preventDefault();
    try{
      const result = await axios.get("/api/coaches")
    }catch(error){
      console.log(error)
    }
    console.log(result)
  } 
handleSubmit();

    return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog
      className=' bg-slate-500 rounded-md p-2'>
        <Modal.Header closeButton>
          <Modal.Title>Coach Name</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Coach Desc.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    )
}
export default example_function8


