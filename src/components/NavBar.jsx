import {useContext} from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';
import {RegisterModalContext} from "../context/RegisterModalContext";
import {LoginModalContext} from "../context/LoginModalContext";
var login = "";
export function NavBar(props){
    const {regModal,regOpen,regClose} = useContext(RegisterModalContext);
    const {logModal,logOpen,logClose} = useContext(LoginModalContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Осенний бал</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                        <Nav.Link href="#main" active>Главная</Nav.Link>
                        <Nav.Link href="#addMusic" disabled={ login == "" }>Добавить песню</Nav.Link>
                    </Nav>
                    <Nav>
                        { login == "" &&
                            <>
                                <Nav.Link href="#reg" onClick={regOpen}>Регистрация</Nav.Link>
                                <Nav.Link href="#log" onClick={logOpen}>Войти</Nav.Link>
                            </>
                        }
                        { login !== "" &&
                            <Navbar.Text>
                                Привет, <a href="#login">{login}</a>
                            </Navbar.Text>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}