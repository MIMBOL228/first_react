import {createContext, useState} from 'react'

export const RegisterModalContext = createContext({
    regModal: false,
    regOpen: () => {},
    regClose: () => {}
});
export const RegisterModalState = ({ children }) => {
    const [regModal, setModal] = useState(false);
    const regOpen = () => {setModal(true)};
    const regClose = () => {setModal(false)}
    return (
        <RegisterModalContext.Provider value={ regModal, regOpen, regClose}>
            { children }
        </RegisterModalContext.Provider>
    );
}