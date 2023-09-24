import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdd({ show, handleClose }) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = () => {

        console.log("check >>", name, job);
        console.log("check >>", name, job);
        console.log("check >>", name, job);

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='Form-Body'>
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter name" />
                            </div>
                            <div class="form-group">
                                <label>Jobs</label>
                                <input value={job} onChange={e => setJob(e.target.value)} type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Jobs" />
                            </div>
                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;


