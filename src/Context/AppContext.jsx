import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const correctEmail = "test1234@gmail.com";
    const correctPassword = "12345";

    const login = ({ email, password }) => {
        if (correctEmail === email && correctPassword === password) {
            const loggedUser = {email};
            setUser(loggedUser);
            return { success: true }
        }
        return { success: false, message: "Invalid email or password" }
    }

    const logout = () => {
        setUser(null);
        Swal.fire({
            title: "Logout SuccessFully!",
            icon: "success",
            draggable: false,
            
        });
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <AppContext.Provider value={value}>
            { children}
        </AppContext.Provider>
    )
}

export default AppProvider;