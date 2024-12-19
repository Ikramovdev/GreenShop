"use client"
import React, { createContext, ReactNode, SetStateAction, useState, useEffect } from "react";

interface ContextType {
    token: string | null;
    setToken: React.Dispatch<SetStateAction<string | null>>;
}

export const Context = createContext<ContextType>({
    token: null,
    setToken: () => { },
});

export const AuthContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token") || null);
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    return (
        <Context.Provider value={{ token, setToken }}>
            {children}
        </Context.Provider>
    );
};
