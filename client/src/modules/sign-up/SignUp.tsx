import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Container, Row, Col, Card, Button, InputGroup } from 'react-bootstrap';
import { Eye } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {

    const [showPassword, setShowPassword] = useState<{ actual: boolean, confirm: boolean }>({ actual: false, confirm: false });
    const navigate = useNavigate();

    const submitUser = (data: any) => {
        console.log('submit data = ', data);
    }

    return(
            <Card bg="light" className="w-75 mx-auto">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Sign Up Form</Card.Title>
                    <hr />
                    <Form>
                        <Form.Group className="mb-3 mt-2" controlId="form-sign-up">
                            <Form.Label className="text-center mx-auto w-100">Email</Form.Label>
                            <Form.Control type="email" className="mx-auto w-50" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4" controlId="form-sign-up-pass">
                            <Form.Label className="text-center mx-auto w-100">Password</Form.Label>
                            <InputGroup className="mb-3 mx-auto w-50">
                                <Form.Control type={ showPassword.actual ? "text" : "password"} placeholder="Enter password" />
                                <Button onClick={() => {
                                    setShowPassword((oldValue) => {
                                        return {...oldValue, actual: !oldValue.actual};
                                    })
                                }}><span style={{ fontSize: '.9em' }}>{showPassword.actual ? "Hide": "Show"} Password</span> <Eye className="ml-1" /></Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 mt-4" controlId="form-sign-up-confirm-pass">
                            <Form.Label className="text-center mx-auto w-100">Confirm Password</Form.Label>
                            <InputGroup className="mb-3 mx-auto w-50">
                                <Form.Control type={showPassword.confirm ? "text" : "password" } placeholder="Confirm Password" />
                                <Button onClick={() => {
                                    setShowPassword((oldValue) => {
                                        return {...oldValue, confirm: !oldValue.confirm};
                                    })
                                }}><span style={{ fontSize: '.9em'}}>{showPassword.confirm ? "Hide": "Show"} Password</span> <Eye className="ml-1" /></Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="mx-auto w-100 text-center">
                    <Button variant="outline-success" onClick={() => {
                        console.log("submitted");
                    }} >Submit</Button>
                    {' '}
                    <Button variant="outline-danger" onClick={() => {
                        navigate('/app/login')
                    }}>Cancel</Button>
                </Card.Footer>
            </Card>
    )

}