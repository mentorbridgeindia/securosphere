import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RegisterData } from './Register.types';
import { FormLabel } from '@atoms/FormLabel';
import linkedinIcon from "../assets/icons/linkedin.svg";
import googleIcon from "../assets/icons/google.svg";
import githubIcon from "../assets/icons/github.svg";
import signupimage from "../assets/icons/signup.jpeg";

import { Anchor } from '@atoms/Anchor';

const schema = yup.object({
    id: yup.string().optional(),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
        .matches(/[a-z][A-Z][0-9][@#$%]/, 'Make a strong password'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
}).required();
export const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: RegisterData) => {
        console.log('Data being sent to backend:', data);
        const jsonData = {
            fname: data.firstName,
            lname: data.lastName,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post('http://localhost:8080/signup', jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response:', response);  // Log the response to check
            if (response.status === 200) {
                toast.success('Registration successful');
            } else {
                toast.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error); // Log error for debugging
            toast.error('Registration failed. Check the server.');
        }
    };


    return (
        <Container
            fluid
            className={`d-flex justify-content-center align-items-center ${Object.keys(errors).length > 0 ? 'mt-5' : 'mt-4'
                } mb-4`}
        >
           
            <Row className="w-100">
                {/* Left Section */}
                <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
                    <img
                        src={signupimage}
                        alt="Logo"
                        className="img-fluid"
                        style={{
                            maxHeight: '80%',
                            maxWidth: '90%',
                            marginLeft: '10%',
                        }}
                    />
                </Col>

                {/* Right Section */}
                <Col
                    lg={6}
                    xs={12}
                    className="d-flex justify-content-center align-items-center mt-4 mb-4"
                >
                    <div
                        className="p-4 shadow rounded position-relative card-with-corners rounded-4"
                        style={{
                            maxWidth: '100%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center mt-2">Sign Up</h4>
                            {/* Social Icons */}
                            <div className="d-flex justify-content-center gap-3 my-3">
                                <Button variant="outline-primary" className="rounded-circle p-2 btn-icon">
                                    <img
                                        src={googleIcon}
                                        alt="Google"
                                        className="img-fluid "
                                        style={{ width: '24px', height: '24px' }}
                                    />

                                </Button>
                                <Button variant="outline-primary" className="rounded-circle p-2 btn-icon">
                                    <img
                                        src={githubIcon}
                                        alt="GitHub"
                                        className="img-fluid "
                                        style={{ width: '24px', height: '24px' }}
                                    />
                                </Button>
                                <Button variant="outline-primary" className="rounded-circle p-2  btn-icon" >
                                    <img
                                        src={linkedinIcon}
                                        alt="LinkedIn"
                                        className="img-fluid "
                                        style={{ width: '24px', height: '24px' }}
                                    />
                                </Button>
                            </div>
                            <h5 className="text-center my-3">Or</h5>

                            {/* Form Fields */}
                            <Row>
                                <Col xs={12} lg={6}>
                                    <Form.Group>
                                        <FormLabel>First Name</FormLabel>

                                        <Form.Control type="text" {...register('firstName')} />
                                        {errors.firstName && (
                                            <p className="text-danger">
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <Form.Group>
                                        <FormLabel>Last Name</FormLabel>
                                        <Form.Control type="text" {...register('lastName')} />
                                        {errors.lastName && (
                                            <p className="text-danger">
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group>
                                <FormLabel>Email</FormLabel>
                                <Form.Control type="email" {...register('email')} />
                                {errors.email && (
                                    <p className="text-danger">{errors.email.message}</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <FormLabel>Password</FormLabel>
                                <Form.Control type="password" {...register('password')} />
                                {errors.password && (
                                    <p className="text-danger">{errors.password.message}</p>
                                )}
                            </Form.Group>

                            <Form.Group>
                                <FormLabel>Confirm Password</FormLabel>
                                <Form.Control type="password" {...register('confirmPassword')} />
                                {errors.confirmPassword && (
                                    <p className="text-danger">{errors.confirmPassword.message}</p>
                                )}
                            </Form.Group>


                            <Form.Group className="d-flex align-items-center my-3">
                                <Form.Check type="checkbox" />
                                <FormLabel className="ms-2">
                                    I agree to the <Anchor href="/">Terms and Conditions</Anchor>
                                </FormLabel>
                            </Form.Group>

                            <Button type="submit" className="w-50 text-center">
                                Sign up
                            </Button>
                            <p className="text-center mt-3">
                                Have an account already?
                                <Anchor href="/">Sign in</Anchor>
                            </p>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
