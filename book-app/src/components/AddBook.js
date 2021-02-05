import React, {useState} from 'react';
import './AddBook.css';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { addBook } from '../actions/BookAction';
import { useHistory } from 'react-router-dom';
import shortid from 'shortid';

function AddBook() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const createBook = (e) => {
        e.preventDefault();
        const new_book = {
            id: shortid.generate(),
            title,
            price,
            image,
            author,
            rating,
            category,
            description
        }
        dispatch(addBook(new_book));
        history.push("/");
    }

    return (
        <>
                    <form onSubmit={(e) => createBook(e)}>
                    <Container className="container-addBook">
                        <Row>
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Image URL"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Author Name"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Rating"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Book Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <Button type="submit" className="add-book-btn">
                                    Add Book
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    </form>
        </>    
    )
}

export default AddBook
