import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { Airplane } from 'react-bootstrap-icons';
import { TreeFill } from 'react-bootstrap-icons';
import { Cake } from 'react-bootstrap-icons';
import demoImage from '../../assets/images/home_banner.jpg'

import './Home.css'



const Home = ()=>{

    return (

      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">My Back Yard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className='mt-5'>
          <Row>
            <Col id="home_banner" md={12}>
            <h2>Places are a reflection to your heart</h2>
            </Col>
          </Row>

          <Row id="services" className='mt-5'>

         
            <Col md={4} className='text-center'>
            <Airplane className='mb-3' size={40} />
            <p>Travel</p>
            </Col>
            <Col md={4} className='text-center'>
            <TreeFill className='mb-3' size={40} />
            <p>Nature</p>
            </Col>
            <Col md={4} className='text-center'>
            <Cake className='mb-3' size={40} />
            <p>Food</p>
            </Col>

          </Row>

          <Row id="intro" className='mt-5'>
            <Col md={12} className='text-center'>
            <p>Alaways wanted to travel to places that are close to my heart but was never able
              to accomplish that because of financial shortcomings. Thats the reason i decided
              to build this online blog where people can share their experiences while travelling
              the world by providing reviews and recommedations of food and places to travel.
            </p>
            </Col>
          </Row>

          <Row id="food" className='mt-5'>
            <p>Recently Visited</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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
            <p>Most Popular Food</p>
            <Col md={3} style={{display:'flex', justifyContent:'center'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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
                <Card.Img variant="top" src={demoImage} />
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





      </>
    )
}

export default Home