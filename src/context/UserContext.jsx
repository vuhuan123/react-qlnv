import { createContext, useState } from "react";

const UserContext = createContext({ email: "", auth: false })

const UserProvider = ({ children }) => {
    // User is the name of the "data" that gets stored in context
    const [user, setUser] = useState({ email: '', auth: false });

    // Login updates the user data with a name parameter
    const loginContext = (email, token) => {
        setUser((user) => ({
            email: email,
            auth: true,
        }));
        localStorage.setItem("token", token)
    };

    // Logout updates the user data to default
    const logout = () => {
        localStorage.removeItem("token")
        setUser((user) => ({
            email: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider } 