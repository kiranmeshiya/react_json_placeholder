import '../App.css';
import { Button, Container, Form, Nav, Navbar, Card, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Singlepost() {
    let [post, setPost] = useState([])
    let [val, setVal] = useState([])
    let [status, setstatus] = useState(false)
    const params = useParams();

// this is chenged file after push in github 
const searchHandler = (e) => {
    e.preventDefault();
    const elm = e.target.search.value;
    const fetchsearchData = () => {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${elm}`)
            .then((response) => response.json())
            .then((data) => setVal(data));
    }
    const fetchpostData = () => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${elm}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }
    fetchsearchData();
    fetchpostData();
    setstatus(true);

}
    useEffect(() => {
        const fetchData = () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                .then((response) => response.json())
                .then((data) => setPost(data));
        }
        const fetchDataComments = () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
                .then((response) => response.json())
                .then((data) => setVal(data));
        }
        fetchData();
        fetchDataComments();
        setstatus(true);
    }, [params.id])

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
                                <Form className="d-flex" onSubmit={searchHandler}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        id='search'
                                    />
                                    <Button variant="outline-success" type='submit'>Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Row>
                        <div className='single_area'>
                            <Card style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Card.Title className='my-2'>User Id : {post.userId} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Id : {post.id}</Card.Title>
                                    <Card.Title className='mb-3'>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.body}
                                    </Card.Text>
                                    <Button variant="dark" href="/" >Go Back</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>

                    <Row>
                        <div className='comments'>
                            {
                                val.map((item, index) => {
                                    return (
                                        <Card style={{ width: '22rem' }} key={index} className='my-4 mx-3 bg-dark text-light'>
                                            <Card.Body>
                                                <Card.Title>Post Id : {item.postId} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Id : {item.id}</Card.Title>
                                                <Card.Subtitle className="my-2">{item.name}</Card.Subtitle>
                                                <Card.Subtitle className="mt-3 mb-0 email_id">{item.email}</Card.Subtitle>
                                                <Card.Text className="my-4">
                                                    {item.body}
                                                </Card.Text>
                                                {/* <Card.Link href={`/post/${value.id}`} className="mb-0">More Details...</Card.Link> */}
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </div>
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

export default Singlepost;