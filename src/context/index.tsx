"use client"
import { createContext, ReactNode, useContext, useState } from "react"


interface AppContextData {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

const AppContext = createContext<any>(undefined)

const AppWrapper = ({ children }: { children: ReactNode }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppWrapper };