

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./OrgPage.css";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  oname: yup
    .string()
    .min(4, "Please enter a valid Organization Name")
    .required("Organization Name is required"),
  ecount: yup
    .string()
    .min(4, "Please enter at least 4 characters")
    .required("Employee Count is required"),
    web: yup
    .string()
    .min(4, "Please enter a valid Web address")
    .required("Employee Count is required"),
    domain: yup
    .string()
    .min(4, "Please enter a valid Domain Name")
    .required("Employee Count is required"),
});





  export const OrgPage: React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isValid, isDirty },
    } = useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  
  return (
    <div className="card">
      <Container>
        <Form className="container" onSubmit={handleSubmit((data) => console.log(data))}>
          <h4>Secure Your Site With SecuroSphere</h4>
          <Row>
            <Col sm={12} lg={6}><img src="form.png" alt="form_image" /></Col>
            <Col sm={12} lg={6} className="row">

              <Col sm={12} lg={10} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Organization Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("oname")}
                    className="inputfield"
                    placeholder="Enter Your Organization Name"
                  />
                   <p className="text-start d-block errormsg">{errors.oname?.message}</p>
             
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Employee Count</Form.Label>
                  <Form.Select className="inputfield" 
                  {...register("ecount")}>
                    <option>Select</option>
                    <option>10-20</option>
                    <option>10-20</option>
                  </Form.Select>
                  <p>{errors.ecount?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="ml-4 text-start d-block label">Website Url</Form.Label>
                  <Form.Control type="url" className="inputfield" {...register("web")} placeholder="Enter Your Website URL" />
                  <p className="text-start d-block errormsg">{errors.web?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Domain address</Form.Label>
                  <Form.Control type="text" className="inputfield" {...register("domain")} placeholder="name@example.com" />
                  <p className=" text-start d-block errormsg">{errors.domain?.message}</p>
                </Form.Group>

              </Col>
              <Row>
                <Col lg={6} sm={12}>
                 
                    <Button type="submit" className="button" disabled={isDirty && ! isValid}>Submit</Button>
                 

                </Col>
                <Col lg={6} sm={12}>
                  
                    <Button type="reset" value="Reset" className="button" >Clear</Button>
                 
                </Col>
              </Row>

            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  )
}












export default OrgPage;





