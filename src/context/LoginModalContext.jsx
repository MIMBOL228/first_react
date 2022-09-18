import {createContext, useState} from 'react'

export const LoginModalContext = createContext({
    logModal: false,
    logOpen: () => {},
    logClose: () => {}
});
export const LoginModalState = ({ children }) => {
    const [logModal, setModal] = useState(false);
    const logOpen = () => {setModal(true)};
    const logClose = () => {setModal(false)}
    return (
        <LoginModalContext.Provider value={ logModal, logOpen, logClose}>
            { children }
        </LoginModalContext.Provider>
    );
}