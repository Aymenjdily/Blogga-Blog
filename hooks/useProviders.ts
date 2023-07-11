import { useContext } from "react";
import { ProviderContext } from "@/context/providerContext";

export const useProviders = () => {
    const context = useContext(ProviderContext)

    if(!context) {
        throw Error('use the Context Provider inside the Layout App')
    }

    return context
}