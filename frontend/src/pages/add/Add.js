import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../layout/layout";

const Add = ()=>{

    return (

      <Layout>
        <Container className="mt-5">
            <Row style={{display:'flex', alignItems:'center', justifyContent:"center"}}>
                
                <Col className="shadow-sm mb-5 bg-body rounded p-4" md={8}>
                <h2 style={{fontSize:'18px',fontWeight:'500', marginBottom:'30px'}}>Add Attraction</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name of attraction" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Select Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                        <option>Type of Attraction</option>
                        <option value="1">Food</option>
                        <option value="2">Place</option>
                        <option value="3">Monuments</option>
                        </Form.Select> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Country name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Country name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Local Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last Visited</Form.Label>
                        <Form.Control type="date" placeholder="Country name" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                        <Button className="w-25" variant="secondary">Post</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </Layout> 

    )
}

export default Add;