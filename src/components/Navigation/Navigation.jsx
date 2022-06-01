import React from "react";
import { Navbar, Container, Form, Nav, NavDropdown, FormControl, } from "react-bootstrap";


function Navigation(props) {
    return (
        <>
            <Navbar bg="light" expand="lg" className="Navbar">
                <Container fluid>
                    <Navbar.Brand href="#">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Anasayfa</Nav.Link>
                            <Nav.Link href="#action2">Kütüphane</Nav.Link>
                            <NavDropdown title="Araçlar" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Favoriler</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Daha sonra izle</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    İletişim
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                value={props.value}
                                placeholder="Search"
                                className="me-2"
                                onChange={(event) => props.setSearchValue(event.target.value)}
                            />
                          
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
