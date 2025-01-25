'use client';

import { User } from "@/interfaces/User";
import React, { createContext, useEffect, useState } from "react";

interface UserContextType {
    user: User;
    login: (userData: { token: string, email: string, name: string }) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType>({
    user: { token: "", email: "", name: "" },
    login: () => { },
    logout: () => { },
});

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>({
        token: "",
        email: "",
        name: ""
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('userToken');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Save user data to localStorage whenever the user state changes
    useEffect(() => {
        if (user.token) {
            localStorage.setItem("userToken", JSON.stringify(user));
        } else {
            localStorage.removeItem("userToken");
        }
    }, [user]);

    // Login function
    const login = (userData: { token: string, email: string, name: string }) => {
        setUser(userData);
    };

    // Logout function
    const logout = () => {
        setUser({ token: "", email: "", name: "" });
        localStorage.removeItem("userToken");
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
