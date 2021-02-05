import React, {useState, useEffect} from 'react'
import './BookDetails.css';
import { Container, Row, Col } from 'react-bootstrap';
import { getBook} from '../actions/BookAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function BookDetails() {
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

    return (
        <Container className="conatiner-book-details">
            <Row>
                <Col>{id}</Col>
                <Col><img src={image} /></Col>
                <Col>{title}</Col>
                <Col>{price}</Col>
                <Col>{author}</Col>
                <Col>{rating}</Col>
                <Col>{category}</Col>
                <Col>{description}</Col>
            </Row>
        </Container>
    )
}

export default BookDetails