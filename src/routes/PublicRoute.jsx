import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import TableUser from "../components/TableUser";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoutes";

function PublicRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route
                    path="/user"
                    element={
                        <PrivateRoute>
                            <TableUser />
                        </PrivateRoute>
                    }
                />
            </Routes>



        </>
    );
}

export default PublicRoute;