import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';



function TableUser() {
    const [listUser, setListUser] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [totalUser, setTotalUser] = useState(0);
    useEffect(() => {

        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setListUser(res.data.data)
            setTotalPage(res.data.total_pages)
            setTotalUser(res.data.total)
        }
    }

    const handlePageClick = (e) => {
        getUsers(e.selected + 1)
    }

    return (

        <>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {listUser && listUser.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
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
        </>

    );


}

export default TableUser;