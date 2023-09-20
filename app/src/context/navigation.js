import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function NavigationProvider({ children }) {

    const [isMenuDisabled, setIsDisabled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isDisabled = () => {
        setIsMenuOpen(false)
        setIsDisabled(true)
    }


    return (
        <MyContext.Provider value={{ toggleMenu, isMenuOpen, isMenuDisabled, isDisabled }}>

            {children}
        </MyContext.Provider>
    )


}


export function useNavContext() {

    return useContext(MyContext);
}