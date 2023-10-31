import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';
import _, { debounce } from "lodash"
import ModalConfirm from './ModalConfirm';
import { HiOutlinePlus } from "react-icons/hi";
import { CSVLink, CSVDownload } from "react-csv";
import { BiExport } from "react-icons/bi";
import { CiImport } from "react-icons/ci";
import "./TableUser.scss"

function TableUser() {
    const [listUser, setListUser] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalUser, setTotalUser] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const [dataEditUser, setDataEditUser] = useState({});
    const [isShowModalConfirm, setIsShowModalConFirm] = useState(false)
    const [dataDeleteUser, setDataDeleteUser] = useState({});
    const [searchUser, setSearchUser] = useState("");






    const handleAdd = () => {
        setIsShow(true)
    }

    const handleClose = () => {
        setIsShow(false)
        setShowEdit(false)
        setIsShowModalConFirm(false)
    }
    useEffect(() => {

        getUsers(1)
    }, []);

    const handleUpdateUser = (user) => {
        setListUser([user, ...listUser])

    }
    const handleEditUserFromModal = (user) => {
        let cloneListUser = [...listUser]
        let index = listUser.findIndex(item => item.id === user.id);
        cloneListUser[index].first_name = user.first_name;
        setListUser(cloneListUser);
        setShowEdit(false)

    }

    const handleDeleteUserFromModal = (user) => {
        let cloneListUser = [...listUser]
        cloneListUser = cloneListUser.filter(item => item.id !== user.id);
        setListUser(cloneListUser);
    }




    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setListUser(res.data)
            setTotalPage(res.total_pages)
            setTotalUser(res.total)
        }
    }

    const handlePageClick = (e) => {
        getUsers(e.selected + 1)
    }

    const handleEdit = (user) => {
        setShowEdit(true)
        setDataEditUser(user)


    }

    const handleDelete = (user) => {
        setIsShowModalConFirm(true)
        setDataDeleteUser(user)
    }
    const handleSearch = debounce((e) => {
        const vl = e.target.value
        if (vl) {
            let cloneListUser = [...listUser]
            cloneListUser = cloneListUser.filter(item => {
                return item.email.includes(vl)
            })
            setListUser(cloneListUser);
        }
        else {
            getUsers(1)

        }
    }, 1000)

    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];

    return (

        <>
            <div className='my-3 d-flex justify-content-between'>
                <h4>List Box:</h4>
                <div className='groupt-btns'>
                    <label htmlFor="file" className='btn btn-warning'><CiImport />  Import</label>
                    <input id='file' type="file" hidden />
                    <CSVLink
                        filename={"users.csv"}
                        className="btn btn-primary"
                        data={listUser}>
                        <BiExport /> Export</CSVLink>
                    <button className='btn btn-success' onClick={handleAdd}><HiOutlinePlus /> Add new</button>
                </div>

            </div>

            <div className='my-4 col-8 d-flex justify-content-between'>
                <input  /*value={searchUser}*/ className='form-control' placeholder='Search user by email..' onChange={(e) => handleSearch(e)} />

            </div>



            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {listUser && listUser.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className='btn btn-warning mx-3' onClick={() => handleEdit(user)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(user)} >Delete</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={totalPage}
                pageRangeDisplayed={4}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
            />

            <ModalAdd handleUpdateUser={handleUpdateUser} show={isShow} handleClose={handleClose} />
            <ModalEdit handleUpdateUser={handleUpdateUser} show={showEdit} handleClose={handleClose} dataEditUser={dataEditUser} handleEditUserFromModal={handleEditUserFromModal} />
            <ModalConfirm show={isShowModalConfirm} handleClose={handleClose} dataDeleteUser={dataDeleteUser} handleDeleteUserFromModal={handleDeleteUserFromModal} />
        </>

    );


}

export default TableUser;