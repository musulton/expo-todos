import React, {createContext} from "react";

const DepsContext = createContext({});

export const useDeps = () => {
    return React.useContext(DepsContext);
}

const DepProvider = ({children, services}) => {
    return (
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}

export default DepProvider;
