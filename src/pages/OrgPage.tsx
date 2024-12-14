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
  orgName: yup
    .string()
    .min(4, "Please enter a valid Organization Name")
    .required("Organization Name is required"),
    empCount: yup
    .string()
    .min(4, "Please enter at least 4 characters")
    .required("Employee Count is required"),
    website: yup
    .string()
    .min(4, "Please enter a valid Web address")
    .required("Employee Count is required"),
    domain: yup
    .string()
    .min(4, "Please enter a valid Domain Name")
    .required("Domain Name is required"),
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
        <Form  onSubmit={handleSubmit((data: any) => console.log(data))}>
          <h4>Secure Your Site With SecuroSphere</h4>
          <Row>
            <Col sm={0} lg={6}><img src="form1.png" alt="form_image" /></Col>
            <Col sm={12} lg={6} className="row">

              <Col sm={12} lg={10} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Organization Name</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("orgName")}
                    className="inputfield"
                    placeholder="Enter Your Organization Name"
                  />
                   <p className="text-start d-block errormsg">{errors.orgName?.message}</p>
             
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Employee Count</Form.Label>
                  <Form.Select className="inputfield" 
                  {...register("empCount")}>
                    <option>Select</option>
                    <option>10-20</option>
                    <option>10-20</option>
                  </Form.Select>
                  <p>{errors.empCount?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="ml-4 text-start d-block label">Website Url</Form.Label>
                  <Form.Control type="url" className="inputfield" {...register("website")} placeholder="Enter Your Website URL" />
                  <p className="text-start d-block errormsg">{errors.website?.message}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-start d-block label">Domain Name</Form.Label>
                  <Form.Select className="inputfield" 
                  {...register("domain")}>
                    <option>Select</option>
                    <option>Retail</option>
                    <option>Banking</option>
                    <option>Ecommerece</option>
                    <option>Other</option>
                  </Form.Select>
                  <p className=" text-start d-block errormsg">{errors.domain?.message}</p>
                </Form.Group>

              </Col>
              <Row>
                <Col lg={6} sm={6}>
                 
                    <Button type="submit" className="button" disabled={isDirty && ! isValid}>Submit</Button>

                    
                    </Col>
                    <Col lg={6} sm={6}><Button type="reset" value="Reset" className="button" >Clear</Button>
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





