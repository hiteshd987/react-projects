import {
    ADD_BOOK,
    GET_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK
} from '../constants/types';

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book
});

export const getBook = (id) => ({
    type: GET_BOOK,
    payload: id
});

export const updateBook = (book) => ({
    type: UPDATE_BOOK,
    payload: book
});

export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id
});