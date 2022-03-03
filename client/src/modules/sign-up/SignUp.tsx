import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Container, Row, Col } from 'react-bootstrap';

export const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    console.log('errors = ', errors);

    return(
            <Form>
                <Form.Group className="mb-3" controlId="form-sign-up">

                    <Form.Label>Email</Form.Label>

                </Form.Group>
            </Form>
    )

}