'use client';

import {
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';

interface DetailProps {
    bkName: string;
    conName: string;
    imgIrl: string;
}

export interface DashboardContextType {
    openPlayButton: boolean;
    setOpenPlayButton: Dispatch<SetStateAction<boolean>>;
    subScriptionButton: string;
    setSubScriptionButton: Dispatch<SetStateAction<string>>;
    detailData: DetailProps;
    setDetailData: Dispatch<SetStateAction<DetailProps>>;
}

const defaultDetailData: DetailProps = {
    bkName: '',
    conName: '',
    imgIrl: '',
};

const DashboardContext = createContext<DashboardContextType>({
    openPlayButton: false,
    setOpenPlayButton: () => { },
    subScriptionButton: '',
    setSubScriptionButton: () => { },
    detailData: defaultDetailData,
    setDetailData: () => { },
});

interface DashboardProviderProps {
    children: ReactNode;
}

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
    const [openPlayButton, setOpenPlayButton] = useState<boolean>(false);
    const [subScriptionButton, setSubScriptionButton] = useState<string>('');
    const [detailData, setDetailData] = useState<DetailProps>(defaultDetailData);

    return (
        <DashboardContext.Provider
            value={{
                openPlayButton,
                setOpenPlayButton,
                subScriptionButton,
                setSubScriptionButton,
                detailData,
                setDetailData,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardContext;
