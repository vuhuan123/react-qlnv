import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUsers } from '../services/UserService'
import { toast } from 'react-toastify';
import { deleteUser } from '../services/UserService';


function ModalConfirm({ show, handleClose, dataDeleteUser, handleDeleteUserFromModal }) {
    const handleDeleteUserData = async () => {
        const res = await deleteUser(dataDeleteUser.id)

        if (res && +res.statusCode === 204) {
            toast.success("Delete user")
            handleClose(false)
            handleDeleteUserFromModal(dataDeleteUser);
        }

    }


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='Form-Body'>
                        <form>
                            <div className="form-group">
                                Are you sure delete this user?
                                <br></br>
                                email : {dataDeleteUser.email}
                            </div>

                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteUserData}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalConfirm;


