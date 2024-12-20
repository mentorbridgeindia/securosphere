import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

export const Logoutpage=()=>{
    return(
       <Container>
        <Row>
            <Col sm={12} lg={5}> <img src="image.png" alt="logo"/> </Col>
            <Col sm={12} lg={7}> <img src="desgin vector.jpg" alt="logo"  style={{ height: '150px', width: '150px', marginTop: '60px' }} /><h3>Logged out successfully </h3><Col>
            <Col><p>Thank for using securosphere</p></Col><Button as="input" type="submit" value="Sign in Again" /></Col>
           </Col>

        </Row>

       </Container>
  );
    

}