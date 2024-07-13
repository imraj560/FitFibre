import { Row, Container, Col, Card, Button, Accordion} from 'react-bootstrap';
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
                        <Row>
                            <h2 style={{fontSize:'20px', fontWeight:'400'}}>Recent Places</h2>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
                                </Card.Body>
                                </Card>
                            </Col> 
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
                                </Card.Body>
                                </Card>
                            </Col>  
                        </Row>
                        <Row className='mt-5'>
                            <h2 style={{fontSize:'20px', fontWeight:'400'}}>Popular Food</h2>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
                                </Card.Body>
                                </Card>
                            </Col> 
                            <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imgSrc3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="secondary">Take a look</Button>
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