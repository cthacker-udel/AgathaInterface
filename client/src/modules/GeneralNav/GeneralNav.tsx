import React from 'react';

import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';

import { Outlet, useNavigate } from 'react-router-dom';

export const GeneralNav = () => {

    const navigate = useNavigate();

    return (

        <Container fluid>
            <Row style={{ height: "10vh" }} className="mb-4">
                <Col>
                    <Navbar bg="light" expand="lg" fixed="top">

                        <Container>
                            <Navbar.Brand href="#home">Agatha Project</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link onClick={() => {
                                        navigate("/app/home")
                                    }}>Home</Nav.Link>
                                    <Nav.Link onClick={() => {
                                        navigate("/app/login")
                                    }}>Login</Nav.Link>
                                    <Nav.Link onClick={() => {
                                        navigate("/app/signup")
                                    }}>Sign Up</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>

    );



}