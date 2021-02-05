import React, { useState, useEffect } from 'react'
import './Book.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { Container, Row, Col  } from 'react-bootstrap';
import BookDisplay from './BookDisplay';
import { sortByCategory, sortByRating } from '../actions/SortAction';

function Book() {
    const books = useSelector((state) => state.bookReducer.books);
    const bookSort = useSelector((state) => state.bookSortReducer.bookSort);
    const dispatch = useDispatch();
    const [response, setResponse] = useState(false);


    const onCategoryChange = () => {
        var selectedBox = document.getElementById("category");
        var selectedValue = selectedBox.options[selectedBox.selectedIndex].value;
        // console.log();
        setResponse({response: true});
        dispatch(sortByCategory(selectedValue));
    }

    const onRatingChange = () => {
        var selectedBox = document.getElementById("rating");
        var selectedValue = selectedBox.options[selectedBox.selectedIndex].value;
        // console.log(selectedValue);
        setResponse({response: true});
        // dispatch(sortByRating(selectedValue));
        dispatch(sortByCategory(selectedValue));
    }

    return (
        <>  
            <Container className="container-book-main">
                <Row>
                    <Col lg="6">
                        <select id="category" class="category-dropdown" onChange={() => onCategoryChange()}>
                            <option value="" disabled selected>Sort By Category</option>
                            <option value="Fictional">Fictional</option>
                            <option value="Business">Business</option>
                            <option value="Art">Art</option>
                        </select>
                    </Col>
                    <Col lg="6">
                        <select id="rating" class="rating-dropdown" onChange={() => onRatingChange()}>
                            <option value="" disabled selected>Sort By Rating</option>
                            <option value="4">Four & up</option>
                            <option value="3">Three & up</option>
                            <option value="2">Two & up</option>
                            <option value="1">One & up</option>
                        </select>
                    </Col>                   
                </Row>
                <Row className="row-book-main">
                    <Col lg="2" sm="6" className="col-book-main">ID</Col>
                    <Col lg="2" sm="6" className="col-book-main">Title</Col>
                    <Col lg="2" sm="6" className="col-book-main">Price</Col>
                    <Col lg="2" sm="6" className="col-book-main">Author</Col>
                    <Col lg="2" sm="6" className="col-book-main">Action</Col>
                    <Col lg="2" sm="6" className="col-book-main">Action</Col>
                </Row>
                            <Row>                                                   
                            { response == false 
                                ?  books.map(book => (
                                    <BookDisplay
                                        key={book.id} 
                                        books={book} 
                                    /> 
                                    ))
                                :   bookSort.map(book => (
                                    <BookDisplay
                                        key={book.id} 
                                        books={book} 
                                    />
                                     ))                            
                            }
                            </Row>
                {/* <Row>
                   {bookSortCategory!==null 
                        ?<Container>
                            <Row>
                                <Col>{bookSortCategory.title}</Col>
                                <Col>{bookSortCategory.price}</Col>
                                {bookSortCategory.map(book => ( book.category ))
                                }
                            </Row>
                        </Container>
                        : {books.map(book => (
                        <BookDisplay
                            key={book.id} 
                            books={book} 
                        />
                        ))
                        } 
                    } 
                </Row> */}
            </Container>
        </>
    )
}

export default Book
