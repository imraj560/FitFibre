import { Container, Form, Group, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import "./login.css"

const Login = ()=>{

    return (

        <>
            <Container>

                <Row id="loginRow">
                    <Col className="shadow-sm mb-5 bg-body rounded" style={{padding:'25px', background:'#fbf8f8', borderRadius:'5px'}} md={6}>
                        <NavLink to="/"><ArrowLeft className="mb-3"></ArrowLeft></NavLink>
                        <h2 style={{fontSize:'20px',fontWeight:'500', marginBottom:'30px'}}>Welcome Back</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                           
                            <Button variant="secondary" style={{borderRadius:'2px', marginTop:'20px'}}>
                                Sign In
                            </Button>
                        </Form>
                    </Col>
                </Row> 
                    
               
           
                
            </Container>
        </>
    )
}

export default Login;