import './App.css';
import {NavBar} from "./components/NavBar";
import {RegisterModalContext, RegisterModalState} from "./context/RegisterModalContext";
import {LoginModalContext, LoginModalState} from "./context/LoginModalContext";
import {useContext} from "react";


function App({name}) {
    return (
        <RegisterModalState>
            <LoginModalState>
                <NavBar/>

            </LoginModalState>
        </RegisterModalState>
    );
}

export default App;
