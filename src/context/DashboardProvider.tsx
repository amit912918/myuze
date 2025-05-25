'use client';

import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';

export interface DashboardContextType {
    openPlayButton: boolean;
    setOpenPlayButton: Dispatch<SetStateAction<boolean>>;
    subScriptionButton: string;
    setSubScriptionButton: Dispatch<SetStateAction<string>>;
}

const DashboardContext = createContext<DashboardContextType>({
    openPlayButton: false,
    setOpenPlayButton: () => { },
    subScriptionButton: "",
    setSubScriptionButton: () => { },
});

interface AuthProviderProps {
    children: ReactNode;
}

export const DashboardProvider = ({ children }: AuthProviderProps) => {
    const [openPlayButton, setOpenPlayButton] = useState<boolean>(false);
    const [subScriptionButton, setSubScriptionButton] = useState<string>("");

    return (
        <DashboardContext.Provider value={{ openPlayButton, setOpenPlayButton, subScriptionButton, setSubScriptionButton }}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContext;
