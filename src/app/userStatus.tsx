"use client"

import { createContext, useState } from 'react';
interface UserContextValue {
    isLoggedIn: boolean;
    login: () => void;
}
export const UserStatusContext = createContext<UserContextValue | undefined>(undefined);
export function UserStatusProvider({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    const userContextValue: UserContextValue = {
        isLoggedIn,
        login
    };

    return (
        <UserStatusContext.Provider value={userContextValue}>
            {children}
        </UserStatusContext.Provider>
    );
}
