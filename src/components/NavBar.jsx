import {Container, Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
var login = "mimbol";
export function NavBar(props){
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
                                <Nav.Link href="#reg">Регистрация</Nav.Link>
                                <Nav.Link href="#log">Войти</Nav.Link>
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