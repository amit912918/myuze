// context/AuthContext.tsx
'use client';

import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';
import { UserInfo } from '../types/user';

interface AuthState {
    userInfo: UserInfo | null;
}

interface AuthContextType {
    auth: AuthState;
    setAuth: Dispatch<SetStateAction<AuthState>>;
}

export const AuthContext = createContext<AuthContextType>({
    auth: { userInfo: null },
    setAuth: () => { },
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthState>({ userInfo: null });

    useEffect(() => {
        const userInfoStr = localStorage.getItem('userInfo');
        if (userInfoStr) {
            try {
                const userInfo: UserInfo = JSON.parse(userInfoStr);
                setAuth({ userInfo });
            } catch (err) {
                console.error('Error parsing userInfo:', err);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
