"use client"

import { createContext, useState, useEffect, ReactNode } from "react";
import { getProviders } from 'next-auth/react'

// type authContextType = {
//     user: boolean;
//     login: () => void;
//     logout: () => void;
// };

// const authContextDefaultValues: authContextType = {
//     user: false,
//     login: () => {},
//     logout: () => {},
// };

// type Props = {
//     children: ReactNode;
// }

export const ProviderContext = createContext()

export const ProviderContextProvider = ({ children }) => {
    const [providers, setProviders] = useState(null)
    
    useEffect(() => {
        const Providers = async () => {
            const res = await getProviders()
            setProviders(res);
        }
        
        Providers()
    }, [])
    // @ts-ignore
    return (
        <ProviderContext.Provider value={{providers}}>
            {children}
        </ProviderContext.Provider>
    )
}