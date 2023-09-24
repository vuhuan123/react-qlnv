import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUsers } from '../services/UserService'
import { toast } from 'react-toastify';


function ModalAdd({ show, handleClose, handleUpdateUser }) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = async () => {
        const res = await postCreateUsers(name, job);
        console.log(res);
        if (res.data && res.data.id) {
            handleClose();
            setName('');
            setJob('');
            toast.success("Add new user");
            handleUpdateUser({ first_name: res.data.name, id: res.data.id })


        } else {
            toast.error("Error")

        }
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
                            <div className="form-group">
                                <label>Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label>Jobs</label>
                                <input value={job} onChange={e => setJob(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Jobs" />
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


