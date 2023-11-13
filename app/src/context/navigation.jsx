import { createContext, useCallback, useContext, useState } from "react";

const MyContext = createContext();

export function NavigationProvider({ children }) {

    const [menu, setMenu] = useState({
        disabled: false,
        isOpen: false
    })

    const toggleMenu = useCallback(() => {
        setMenu((state) => ({ ...state, isOpen: !state.isOpen }));
      }, []);
    
      const isDisabled = useCallback(() => {
        setMenu((state) => ({ ...state, disabled: true, isOpen: false }));
      }, []);
    
      const notDisabled = useCallback(() => {
        setMenu((state) => ({ ...state, disabled: false }));
      }, []);

    return (
        <MyContext.Provider value={{ toggleMenu, menu, isDisabled, notDisabled }}>

            {children}
        </MyContext.Provider>
    )

}


export function useNavContext() {

    return useContext(MyContext);
}