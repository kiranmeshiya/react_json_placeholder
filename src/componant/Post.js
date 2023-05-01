import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, Card, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Post() {
  const [status, setStatus] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPost(data));
    }
    fetchData();
    setStatus(true)
  }, [])

  if (status) {
    return (
      <>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#action2">Post</Nav.Link>
                <Nav.Link href="#action2">Single Post</Nav.Link>

              </Nav>
              <Form className="d-flex" onS>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" >Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row>
            {
              post.map((value, index) => {
                return (      
                   <Card style={{ width: '22rem' }} key={index} className='my-4 mx-4 bg-dark text-light'>
                   <Card.Body>
                     <Card.Title>User Id : {value.userId} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Id : {value.id}</Card.Title>
                     <Card.Subtitle className="my-2">{value.title}</Card.Subtitle>
                     <Card.Text className="my-4">
                     {value.body}
                     </Card.Text>
                     <Card.Link href={`/post/${value.id}`} className="mb-0">More Details...</Card.Link>
                   </Card.Body>
                 </Card>
                )
              })
            }        
        </Row>
        </Container>
      </>
    );
  }
  else {
    return (
      <>
        <div className="loader"></div>
      </>
    )
  }

}

export default Post;