import { Container, Form, Group, Button, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import "./Register.css"
import { NavLink } from "react-router-dom";

const Register = ()=>{

    return (

        <>
            <Container>

                <Row id="registerRow">
                    
                    <Col className="shadow-sm mb-5 bg-body rounded" style={{padding:'25px', borderRadius:'5px'}} md={6}>
                       <NavLink to="/"><ArrowLeft className="mb-3"></ArrowLeft></NavLink>
                        <h2 style={{fontSize:'18px',fontWeight:'500', marginBottom:'30px'}}>Lets Get You Registered</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="confirm it" />
                                <Form.Text className="text-muted">
                                Just making sure your password matches
                                </Form.Text>
                            </Form.Group>
                           
                            <Button variant="secondary" style={{borderRadius:'2px', marginTop:'20px'}}>
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row> 
                    
               
           
                
            </Container>
        </>
    )
}

export default Register;