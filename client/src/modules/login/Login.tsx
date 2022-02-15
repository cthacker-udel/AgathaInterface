import React from "react";
import styles from "./Login.styles.module.css";
import { Container, Row, Col, Button, Form, Navbar, Badge } from "react-bootstrap";

export const Login = () => {

    return(

        <Container fluid>
            <Navbar fixed="bottom" bg="light">
                <Container>
                    <Navbar.Brand href="#homepage" className="justify-content-start">Agatha Project</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Cameron Thacker</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>
                <Col className={styles.header}>
                    <h1>
                        Welcome to AGATHA
                    </h1>
                </Col>
            </Row>
            <Row>
                    <div className="mt-4 mb-4" style={{ textAlign: 'center', marginBottom: '10vh' }}>
                        <Badge style={{ width: '10vw' }} pill>
                            Login
                        </Badge>
                    </div>
                    <Form className={`${styles.login_form} ml-4 mr-5`}>
                        <Form.Group className={`mb-3`} controlId="formBasicEmail">
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formbasicpassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
            </Row>
            <Row className={`mt-4 ${styles.login_button}`}>
                <Col>
                    <Button>Login</Button>
                </Col>
            </Row>
        </Container>

    );

};