import './Meal.css';
import Layout from '../../layout/layout';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ArrowThroughHeartFill, BanFill, PlayCircleFill, Fire, BalloonFill, Droplet } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Meal = ()=>{

    return (

        <>
            <Layout>
               <Container>
                
                    <Row className='mt-5'>
                        <h1 className='mb-5'>Meal Info</h1>
                        <Col md={4}>
                        <Card className='w-100' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/chickenbreast.jpg`} />
                                <Card.Body>
                                <Card.Title>Chicken Breast</Card.Title>
                                <Card.Text>
                                    This delicious dinner consists of chicken breast with sauted vegetables, this amazing
                                    dinner will put an stop to your midnight cravings
                                </Card.Text>
                                </Card.Body>

                        </Card>
                        </Col>
                        <Col md={4} style={{fontSize:'80px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                         
                            <PlayCircleFill />
                        </Col>

                    </Row>
                  
               </Container>
            </Layout>
        </>
    )
}

export default Meal;