import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import './Register.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const Register = () => {
  const schema = yup.object().shape({
    fname: yup.string().required("Please enter the first name"),
    lname: yup.string().required("Please enter the last name"),
    email: yup.string().email("Invalid email").required("Please enter an email"),
    password: yup.string().required("Password is required").min(8, "Please enter at least 8 characters").min(8,"Password should be less than 8 characters").max(12,"Password should not exceed 12 characters"),
    cpassword: yup
      .string()
      .oneOf([yup.ref('password')], "Passwords must match")
      .required("Please confirm your password"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data); 
  };

  return (
    <Container>
      <Row>
        <Col className="mt-2 image" sm={12} lg={6}>
          <img src="/LOGO.jpeg" alt="logo" />
        </Col>
        <Col sm={12} lg={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h4 className="mt-2">Sign up with</h4>
            
           
              <div  className="icon mt-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>



            </div>
            <h5 className="mt-2">Or</h5>
            <Row>
              <Col sm={12} lg={6}>
                <Form.Group>
                  <Form.Label className="ml-3 d-flex justify-content-start">First name</Form.Label>
                  <Form.Control type="text" {...register("fname")} />
                  {errors.fname && <p className="text-danger ml-3 d-flex justify-content-start">{errors.fname.message}</p>}
                </Form.Group>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Group>
                  <Form.Label className="ml-3 d-flex justify-content-start">Last name</Form.Label>
                  <Form.Control type="text" {...register("lname")} />
                  {errors.lname && <p className="text-danger ml-3 d-flex justify-content-start">{errors.lname.message}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mt-2">
              <Form.Label className="ml-3 d-flex justify-content-start">Email address</Form.Label>
              <Form.Control type="email" {...register("email")} />
              {errors.email && <p className="text-danger ml-3 d-flex justify-content-start">{errors.email.message}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label className="ml-3 d-flex justify-content-start">Password</Form.Label>
              <Form.Control type="password" {...register("password")} />
              {errors.password && <p className="text-danger  ml-3 d-flex justify-content-start">{errors.password.message}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label className="ml-3 d-flex justify-content-start">Confirm password</Form.Label>
              <Form.Control type="password" {...register("cpassword")} />
              {errors.cpassword && <p className="text-danger ml-3 d-flex justify-content-start">{errors.cpassword.message}</p>}
            </Form.Group>
            <h6 className="mt-4 mb-4 d-flex gap-2 check">
              <Form.Check type="checkbox" /> I agree to the terms and conditions
            </h6>
            <Button type="submit" className="Submit">Sign up</Button>
            <p className="mt-2">Have an account already? Sign in</p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
