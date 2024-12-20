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
import { FormLabel } from '@/ui/atoms/FormLabel';
import { FormInput } from '@/ui/atoms/FormInput';
import { Anchor } from '@/ui/atoms/Anchor';

const schema = yup.object({
    id: yup.string().optional(),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
    .matches(/[a-z][A-Z][0-9][@#$%]/,'Make a strong password') ,
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
                        src="signup.jpeg"
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
                                <Button variant="outline-primary" className="rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-google"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.0" />
                                    </svg>
                                </Button>
                                <Button variant="outline-primary" className="rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </Button>
                                <Button variant="outline-primary" className="rounded-circle p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className='bi bi linkedin'
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
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
                                <Form.Label className="ms-2">
                                    I agree to the <Anchor href="/">Terms and Conditions</Anchor>
                                </Form.Label>
                            </Form.Group>

                            <Button type="submit" className="w-50">
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
