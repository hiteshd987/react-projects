import book from '../Book.json'; 

import {
    ADD_BOOK,
    GET_BOOK,
    UPDATE_BOOK,
    DELETE_BOOK
} from '../constants/types';

const initialState = {
    books: book,
    bookEdit: null
}

export const BookReducer = (state = initialState,action) => {
    switch(action.type){

        case ADD_BOOK:
            return {
                ...state,
                books: [action.payload, ...state.books],     
            };

        case GET_BOOK:
            let arr = state.books.filter(book => book.id === action.payload);
            arr = arr.values();
            for(let val of arr){
                arr = val;
            }
            return {
                ...state,
                bookEdit: arr
            }    

        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => 
                    book.id === action.payload.id ? action.payload : book)
            }    

        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            }   
             
        default:
            return state;    
    }
}; 