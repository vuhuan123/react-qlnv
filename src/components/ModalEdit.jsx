
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { putUpdateUser } from '../services/UserService';

function ModalEdit({ show, handleClose, dataEditUser, handleEditUserFromModal }) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job,);
        if (res.data && res.data.updatedAt) {
            handleEditUserFromModal({
                first_name: name,
                id: dataEditUser.id
            })
            toast.success("Update user")

        }
        console.log(res.data);
    }

    useEffect(() => {
        if (show) {
            setName(dataEditUser.first_name)
        }

    }, [dataEditUser])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
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
                    <Button variant="primary" onClick={handleEditUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;


