import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './OrgPage.css'
function orgPage() {
  return (  
  <div className="card">
    <Container>
      <Form className="container">
        <h4>Secure Your Site With SecuroSphere</h4>
        <Row>
          <Col sm={12} lg={6}><img src="form.png" alt="form_image" /></Col>
          <Col sm={12} lg={6}  className="row">

            <Col sm={12} lg={10} >
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Label className="text-start d-block  label ">Organization Name</Form.Label>
                <Form.Control type="text" className="inputfield" placeholder="Enter Your Organization Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-start d-block label">Employee Count</Form.Label>
                <Form.Select  className="inputfield" >
                  <option>Select</option>
                  <option>10-20</option>
                  <option>10-20</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="ml-4 text-start d-block label">Website Url</Form.Label>
                <Form.Control type="url" className="inputfield" placeholder="Enter Your Website URL" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-start d-block label">Email address</Form.Label>
                <Form.Control type="email" className="inputfield" placeholder="name@example.com" />
              </Form.Group>

            </Col>
            <Row>
              <Col lg={6} sm={12}>
                <div className="d-grid gap-2">
                  <Button href="https://www.figma.com/files/team/1427645604904072185/recents-and-sharing?fuid=1427645602718520895" size="lg">Block level button</Button>
                </div>

              </Col>
              <Col lg={6} sm={12}>
                <div className="d-grid gap-2">
                  <Button type="reset" value="Reset" size="lg">Block level button 1</Button>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </Form>
    </Container>
    </div>
  )
}












export default orgPage;





