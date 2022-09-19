import './App.css';
import {useState} from "react";
import {Container, Navbar, Nav, Modal, Button} from 'react-bootstrap';


function App() {

    var login = "mimbol";

    const [logModal, LogSetModal] = useState(false);
    const logOpen = () => {
        LogSetModal(true)
    };
    const logClose = () => {
        LogSetModal(false)
    }

    const [regModal, regSetModal] = useState(false);
    const regOpen = () => {
        regSetModal(true)
    };
    const regClose = () => {
        regSetModal(false)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Осенний бал</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                        >
                            <Nav.Link href="#main" active>Главная</Nav.Link>
                            <Nav.Link href="#addMusic" disabled={login == ""}>Добавить песню</Nav.Link>
                        </Nav>
                        <Nav>
                            {login == "" &&
                                <>
                                    <Nav.Link href="#reg" onClick={regOpen}>Регистрация</Nav.Link>
                                    <Nav.Link href="#log" onClick={logOpen}>Войти</Nav.Link>
                                </>
                            }
                            {login !== "" &&
                                <>
                                    <Navbar.Text>
                                        {login}
                                    </Navbar.Text>
                                    <Navbar.Text>
                                        <a href="#exit">Выйти</a>
                                    </Navbar.Text>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={logModal} onHide={logClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={logClose}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={logClose}>
                        Продолжить
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={regModal} onHide={regClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={regClose}>
                        Продолжить
                    </Button>
                    <Button variant="primary" onClick={regClose}>
                        Продолжить
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;
