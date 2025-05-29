'use client';

import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';

interface AuthContextType {
    auth: {
        userInfo: any;
    };
    setAuth: Dispatch<SetStateAction<{ userInfo: any; }>>;
}

export const AuthContext = createContext<AuthContextType>({
    auth: { userInfo: null },
    setAuth: () => { }
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState({ userInfo: null });

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo) {
            setAuth({
                userInfo: userInfo ? JSON.parse(userInfo) : null
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
