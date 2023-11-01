import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Alert from 'react-bootstrap/Alert';
function PrivateRoute(prop) {
    const { user } = useContext(UserContext);
    if (user && !user.auth && location.pathname === '/user') {
        return <>
            <Alert variant="danger">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Please login to using!
                </p>
                <hr />
                <p className="mb-0">
                    Thank!
                </p>
            </Alert>
        </>
    }
    return (
        <>
            {prop.children}
        </>
    );
}

export default PrivateRoute;
