import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const example_function8= () =>{
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


