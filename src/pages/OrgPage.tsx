import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { Variable } from './Register.types';
import { FormLabel } from '@/ui/atoms/FormLabel';


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
    <Container fluid className="d-flex justify-content-center align-items-center mb-4" >
      <Row className="w-100">
        {/* Left Section */}

        <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
          <video width="700" height="700" autoPlay muted loop>
            <source src="Data Security.mp4"></source>
          </video>

        </Col>

        {/* Right Section */}

        <Col lg={6} xs={12} className="d-flex justify-content-center align-items-center mt-4 mb-4 "  >
          <div className="p-4 shadow rounded position-relative card-with-corners rounded-4 "
            style={{
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
             <Form onSubmit={handleSubmit((data: any) => console.log(data))} >
              <h4 className="text-center vh-20 mt-3 mb-5" style={{ color: "#0c0a7e" }}> Secure Your Site With SecuroSphere</h4>
              <Col xs={12} lg={12}>
                <Form.Group>
                  <FormLabel>Organization Name</FormLabel>
                  <Form.Control style={{ backgroundColor: "#f1f1ff", borderColor: "#ffffff" }}
                    type="text"
                    {...register("orgName")}
                    className=" mb-3" />
                    <p className="text-start d-block text-danger ml-4 d-flex">{errors.orgName?.message}</p>
                </Form.Group>
              </Col>
              <Form.Group>
                <FormLabel >Employee Count</FormLabel>
                <Form.Select className="mb-3" style={{ backgroundColor: "#f1f1ff", borderColor: "#ffffff" }}
                  {...register("empCount")}>
                  <option></option>
                  <option>0-10</option>
                  <option>10-20</option>
                  <option>20-30</option>
                </Form.Select>

                <p className="text-start d-block text-danger ml-4 d-flex">{errors.empCount?.message}</p>
              </Form.Group>

              <Form.Group>
                <FormLabel  >Webiste Url</FormLabel>
                <Form.Control style={{ backgroundColor: "#f1f1ff", borderColor: "#ffffff" }}
                  type="text"
                  {...register("website")}
                  className=" mb-4" />

                <p className="text-start d-block text-danger mb-4 ">{errors.website?.message}</p>
              </Form.Group>

              <Form.Group>
                <FormLabel>Domain Name</FormLabel>
                <Form.Select className="mb-4 " style={{ backgroundColor: "#f1f1ff", borderColor: "#ffffff" }}
                  {...register("domain")}>
                  <option></option>
                  <option>Retail</option>
                  <option>Banking</option>
                  <option>Ecommerece</option>
                  <option>Other</option>
                </Form.Select>
                <p className="text-start d-block text-danger ml-4 d-flex">{errors.domain?.message}</p>
              </Form.Group>
              <Button type="submit" className="w-100" style={{ backgroundColor: "#0c0a7e", borderColor: "#ffffff" }} disabled={isDirty && !isValid}>Submit</Button>
            </Form>
          </div>

        </Col>
      </Row>
    </Container>

  );

};

export default OrgPage;





