import React, { useState, useEffect } from 'react';
import './BookDisplay.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteBook } from '../actions/BookAction';
import { useDispatch, useSelector } from 'react-redux';

function BookDisplay(props) {
   const book = props.books;
   const dispatch = useDispatch();

    return (
        <>
            <Container className="container-book-display">
                <Link to={`/book/details/${book.id}`}>
                <Row className="row-book-display">
                    <Col lg="2" sm="6" className="col-book-display">{book.id}</Col>
                    <Col lg="2" sm="6" className="col-book-display">{book.title}</Col>
                    <Col lg="2" sm="6" className="col-book-display">{book.price}</Col>
                    <Col lg="2" sm="6" className="col-book-display">{book.author}</Col>
                    <Col lg="2" sm="6" className="col-book-display">{book.rating}</Col>
                    <Col lg="2" sm="6" className="col-book-display">
                        <div className="div-actions-btn">
                            <Link to={`/book/edit/${book.id}`}>
                                <span className="links-action-btn material-icons mr-2">edit</span>
                            </Link>
                            <Link>
                                <span className="links-action-btn material-icons text-danger" onClick={() => dispatch(deleteBook(book.id)) }>
                                    remove_circle
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
                </Link>
            </Container>
        </>
    )
}

export default BookDisplay
