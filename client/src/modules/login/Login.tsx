import React, { useState } from "react";
import styles from "./Login.styles.module.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Navbar,
  Badge,
  Card,
} from "react-bootstrap";
import { Eye } from "react-feather";
import { authenticateUser } from "../../api/client-side/auth/authenticateuser";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

    const navigate = useNavigate();

  return (
    <Container fluid>
      <Navbar fixed="bottom" bg="light">
        <Container>
          <Navbar.Brand href="#homepage" className="justify-content-start">
            Agatha Project
          </Navbar.Brand>
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
          <h1>Welcome to AGATHA</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="w-50 text-center mx-auto mt-5">
            <Form className={`${styles.login_form} ml-4 mr-5`}>
              <Form.Group className={`mb-3`} controlId="formBasicEmail">
                <Form.Label className="mt-4">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="w-50 text-center mx-auto"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formbasicpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-50 text-center mx-auto"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-3">
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      setShowPassword((oldValue) => !oldValue);
                    }}
                  >
                    <span
                      className="font-weight-light"
                      style={{ fontSize: ".9em" }}
                    >
                      {showPassword ? "Hide" : "Show"} Password
                    </span>{" "}
                    <Eye />
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className={`mt-4 ${styles.login_button} no-gutters`}>
        <Col>
        <span>
          <Button
            onClick={() => {
              authenticateUser(username, password);
            }}
          >
            Login
          </Button>
          </span>
          <span style={{ marginLeft: '2vw'}}>
            <Button onClick={() => {
                navigate('/app/signup');
            }}>
                Sign up
            </Button>
          </span>
        </Col>
      </Row>
    </Container>
  );
};
