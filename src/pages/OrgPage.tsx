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
import  {OrgpageData} from './OrgPage.types'
import { FormLabel } from '@/ui/atoms/FormLabel';

const schema = yup.object().shape({
  orgName: yup
    .string()
    .min(4, 'Please enter a valid Organization Name')
    .required('Organization Name is required'),
  empCount: yup
    .string()
    .required('Employee Count is required'),
  website: yup
    .string()
    .url('Please enter a valid Website URL')
    .required('Website URL is required'),
  domain: yup
    .string()
    .required('Domain Name is required'),
});

export const OrgPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
 
  const onSubmit = async (data: any) => {
    console.log(data);
    const jsonData: OrgpageData = {
      organizationName: data.orgName,
      industry: data.domain,
      employeesCount: data.empCount,
      domainAddress: data.website,
    };
    try {
     console.log("Entered try");
      const response = await axios.post('http://localhost:8080/organization/create', jsonData, {
       headers: {
          
          'Content-Type': 'application/json',
        },
      
      });
      console.log("entered response",response);
      if (response.status === 200) {
        toast.success('Organization registered successfully!');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('Error during registration. Please check your network or server.');
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center mb-4">
      <Row className="w-100">
    
        <Col lg={6} className="d-none d-lg-flex justify-content-center align-items-center">
          <video width="700" height="700" autoPlay muted loop>
            <source src="Data Security.mp4" type="video/mp4" />
          </video>
        </Col>

        
        <Col lg={6} xs={12} className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <div
            className="p-4 shadow rounded position-relative card-with-corners rounded-4"
            style={{
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="text-center vh-20 mt-3 mb-4" style={{ color: '#0c0a7e' }}>
                Secure Your Site With SecuroSphere
              </h4>

              <Col xs={12} lg={12}>
                <Form.Group>
                  <FormLabel>Organization Name</FormLabel>
                  <Form.Control
                    style={{ backgroundColor: '#f1f1ff', borderColor: '#ffffff' }}
                    type="text"
                    {...register('orgName')}
                    className="mb-4"
                  />
                  <p className="text-danger">{errors.orgName?.message}</p>
                </Form.Group>
              </Col>

              <Form.Group>
                <FormLabel>Employee Count</FormLabel>
                <Form.Select
                  style={{ backgroundColor: '#f1f1ff', borderColor: '#ffffff' }}
                  {...register('empCount')}
                  className="mb-4"
                >
                  <option value="">Select Employee Count</option>
                  <option value="0-10">0-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20-30">20-30</option>
                </Form.Select>
                <p className="text-danger">{errors.empCount?.message}</p>
              </Form.Group>

              <Form.Group>
                <FormLabel>Website URL</FormLabel>
                <Form.Control
                  style={{ backgroundColor: '#f1f1ff', borderColor: '#ffffff' }}
                  type="text"
                  {...register('website')}
                  className="mb-4"
                />
                <p className="text-danger">{errors.website?.message}</p>
              </Form.Group>

              <Form.Group>
                <FormLabel>Domain Name</FormLabel>
                <Form.Select
                  style={{ backgroundColor: '#f1f1ff', borderColor: '#ffffff' }}
                  {...register('domain')}
                  className="mb-4"
                >
                  <option value="">Select Domain</option>
                  <option value="Retail">Retail</option>
                  <option value="Banking">Banking</option>
                  <option value="Ecommerce">E-commerce</option>
                  <option value="Other">Other</option>
                </Form.Select>
                <p className="text-danger">{errors.domain?.message}</p>
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: '#0c0a7e', borderColor: '#ffffff' }}
                disabled={isDirty && !isValid}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrgPage;

