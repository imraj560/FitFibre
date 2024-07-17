import { Row, Container, Col, Card, Button, Accordion, Form, ListGroup} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ArrowThroughHeartFill, BanFill } from 'react-bootstrap-icons';
import Layout from '../../layout/layout';

const Profile = ()=>{

    const imgSrc1 = `${process.env.PUBLIC_URL}assets/images/img1.jpg`;
    const imgSrc2 = `${process.env.PUBLIC_URL}assets/images/img2.jpg`;
    const imgSrc3 = `${process.env.PUBLIC_URL}assets/images/img3.jpg`;

    return (

    <>
        <Layout>
            <Container>
                <Row className='mt-4'>
                    <h2 style={{fontSize:'30px', fontWeight:'400'}}>Hi Raju :)</h2>
                </Row>
               
                <Row className='mt-4'>
                    <Col md={8}>
                        <Row className='mb-4'>
                            <Col md={3}>
                                <Button className='w-100' variant='secondary'>
                                    <NavLink to={'/add'}>
                                        Create New Meal
                                    </NavLink>
                                </Button>
                            </Col>
                            <Col md={9}>
                                <Form.Control className='w-100' type="search" placeholder="search meal" />
                            </Col>
                        </Row>
                        <Row>
                            <h2 style={{fontSize:'20px', fontWeight:'400'}}>Recent Meals</h2>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/protein oats.jpg`} />
                                    <Card.Body>
                                    <Card.Title>Protein Oats</Card.Title>
                                    <Card.Text>
                                        This oats receipe is full of fibres and protein, it will easily fill you up to get
                                        your day started
                                    </Card.Text>
                                    </Card.Body>

                                    <ListGroup className="list-group-flush">
                                    <ListGroup.Item><ArrowThroughHeartFill/> Calories:  300 Cal</ListGroup.Item>
                                    <ListGroup.Item><BanFill/> Protein: 40g</ListGroup.Item>
                                    </ListGroup>

                                    <Card.Body>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>
                                
                                </Card>
                            </Col>
                            <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/healthybiryani.jpg`} />
                                    <Card.Body>
                                    <Card.Title>Healthy Biryani</Card.Title>
                                    <Card.Text>
                                        Trust me it does not get better than this, it will take care of your macros whilst
                                        fullfulling your desire.
                                    </Card.Text>
                                    </Card.Body>

                                    <ListGroup className="list-group-flush">
                                    <ListGroup.Item><ArrowThroughHeartFill/> Calories:  400 Cal</ListGroup.Item>
                                    <ListGroup.Item><BanFill/> Protein: 60</ListGroup.Item>
                                    </ListGroup>

                                    <Card.Body>
                                    <Card.Link href="#">Read more</Card.Link>
                                </Card.Body>
                                
                                </Card>
                            </Col>

                            <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/proteinsmoothie.jpg`} />
                                <Card.Body>
                                <Card.Title>Protein Smoothie</Card.Title>
                                <Card.Text>
                                    This protein smoothie is very filling, its very easy to make and its perfect for an
                                    afternoon snack
                                </Card.Text>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                <ListGroup.Item><ArrowThroughHeartFill/> Calories:  150 Cal</ListGroup.Item>
                                <ListGroup.Item><BanFill/> Protein: 30g</ListGroup.Item>
                                </ListGroup>

                                <Card.Body>
                                <Card.Link href="#">Read more</Card.Link>
                            </Card.Body>
                            
                            </Card>
                            </Col>  
                        </Row>
                
                        
                    </Col>
                    <Col md={4}>
                        <Row>
                        <h2 style={{fontSize:'20px', fontWeight:'400'}}>Recent Messages</h2>
                            <Col md={12}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Adam</Accordion.Header>
                                    <Accordion.Body>
                                    Hi Raju, I just wanted to ask you about this places, regarding what
                                    flight you took to get there and what was the price. Get back to me
                                    at your convenience, take care.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Jake</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Mirul</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Hasan</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    </>
    )
}

export default Profile;