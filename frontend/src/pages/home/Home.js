
import {Row, Col, Card, Container, Button, ListGroup} from 'react-bootstrap'
import { Egg } from 'react-bootstrap-icons';
import { TreeFill } from 'react-bootstrap-icons';
import { PersonArmsUp } from 'react-bootstrap-icons';
import { ArrowThroughHeartFill, BanFill } from 'react-bootstrap-icons';
import Layout from '../../layout/layout';
import { NavLink } from 'react-router-dom';

import './Home.css'

const imgSource = `${process.env.PUBLIC_URL}assets/images/home_banner.jpg`;

const Home = ()=>{

    return (

      <>
        <Layout>
          <Container className='mt-1'>
          <Row>
            <Col id="home_banner" md={12}>
            <h2>Healthy food was never easier to find</h2>
            <Button className='rounded-0' variant='secondary' size='lg'>Food Store</Button>
            </Col>
          </Row>

          <Row id="services" className='mt-5'>

         
            <Col md={4} className='text-center'>
            <Egg className='mb-3' size={40} />
            <p>Food</p>
            </Col>
            <Col md={4} className='text-center'>
            <TreeFill className='mb-3' size={40} />
            <p>Nature</p>
            </Col>
            <Col md={4} className='text-center'>
            <PersonArmsUp className='mb-3' size={40} />
            <p>Workout</p>
            </Col>

          </Row>

          <Row id="intro" className='mt-5'>
            <Col md={12} className='text-center px-5'>
            <p>Fitness has alaways been a part of my identity and I beleive it is related to everything we do 
              through out our lives. A fitbody is a testament to a fit mind which in turn helps you out tremendoulsy
              in your daily lives. It creates a better impression onto other people that you are serious about your
              business and goals and that they can trust you to deliver in an quality of excellent caliber.
            </p>
            </Col>
          </Row>

          <Row id="food" className='mt-5'>
            <p>New Receipes</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
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
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/healthybiryani.jpg`} />
                <Card.Body>
                  <Card.Title>Healthy Biryani</Card.Title>
                  <Card.Text>
                    Trust me it does not get better than this, it will take care of your macros whilst
                    fullfulling your desire for a traditional biryani
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
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
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

            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}assets/images/chickenbreast.jpg`} />
                <Card.Body>
                  <Card.Title>Chicken Breast</Card.Title>
                  <Card.Text>
                    This delicious dinner consists of chicken breast with sauted vegetables, this amazing
                    dinner will put an stop to your midnight cravings
                  </Card.Text>
                </Card.Body>

                  <ListGroup className="list-group-flush">
                  <ListGroup.Item><ArrowThroughHeartFill/> Calories:  450 Cal</ListGroup.Item>
                  <ListGroup.Item><BanFill/> Protein: 70</ListGroup.Item>
                </ListGroup>

                <Card.Body>
                <Card.Link><NavLink to={'/meal'}>Read More</NavLink></Card.Link>
              </Card.Body>
               
              </Card>
            </Col>
            

          </Row>

          <Row id="food" className='mt-5'>
            <p>Breakfast</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            

          </Row>

          <Row id="food" className='mt-5'>
            <p>Lunch</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            

          </Row>

          <Row id="food" className='mt-5'>
            <p>Afternoon Snacks</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            

          </Row>

          <Row id="food" className='mt-5'>
            <p>Dinner</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSource} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            

          </Row>

          

        </Container>
        </Layout>
        





      </>
    )
}

export default Home