import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getBook, updateBook } from '../actions/BookAction';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';


function EditBook() {
    const dispatch = useDispatch();
    const book = useSelector(state => state.bookReducer.bookEdit)
    let {id} = useParams();
    let history = useHistory();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if(book !== null) {
            setTitle(book.title)
            setPrice(book.price)
            setImage(book.image)
            setAuthor(book.author)
            setRating(book.rating)
            setCategory(book.category)
            setDescription(book.description)
        }
        dispatch(getBook(id));
    }, [book])

    const UpdateBook = (e) => {
        e.preventDefault();
        const update_book = Object.assign(book, {
            title: title,
            price: price,
            image:image,
            author: author,
            rating: rating,
            category: category,
            description: description
        });
        dispatch(updateBook(update_book));
        history.push("/");
    }

    return (
                <>
                    <form onSubmit={(e) => UpdateBook(e)}>
                    <Container className="container-addBook">
                        <Row>
                            <Col>
                                <input 
                                    type="text"
                                    className="form-control"
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value) }
                                />
                            </Col>
                        </Row>
                        <Row>    
                            <Col>
                                <Button type="submit" className="add-book-btn">
                                    Update Book
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                    </form>
                </>    
    )
}

export default EditBook
