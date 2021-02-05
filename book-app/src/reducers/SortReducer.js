import book from '../Book.json'; 

import {
    SORT_BY_CATEGORY,
    SORT_BY_RATING
} from '../constants/types';

const initialState = {
    books: book,
    bookSort: null
}

// const byCategory = (state, category) => {
//     var data = state.books.filter((book) => book.category === category);
//     var result = {};
//     for (var i = 0; i < data.length; i++) {
//         result[i] = data[i];
//     }
//     console.log(data);
//     console.log(result[0]);
//     console.log("Before booksort");
//     state.bookSort = result;
//     console.log(state.bookSort);
//     return state;
// }

const sortTemp = (state, payload) => {
    if(payload === book.category){
        console.log(payload)
        var cat = state.books.filter((book) => book.category === payload)
        console.log("Inside category")
    } 
    else{ 
        console.log(payload)
        var rat = state.books.filter((book) => book.rating >= payload)
        console.log("Inside rating")
    }
 
    var merged = {...cat, ...rat};
    console.log(merged)
    return merged;
}

export const SortReducer = (state = initialState, action) => {
    switch(action.type){
        case SORT_BY_CATEGORY:
            // var res = byCategory(state, action.payload);
            // var data=state.books.filter((book) => book.category === action.payload)
            // data = data.values();
            // for(let val of data){
            //     data = val;
            // }
            var temp = sortTemp(state, action.payload);
            return {
                ...state,
                bookSort : temp
                // bookSort : state.books.filter((book) => book.category === action.payload)
            }
        
        case SORT_BY_RATING:
            // console.log("Inside Rating")
            console.log(action.payload)
            return {
                ...state,
                bookSort : state.books.filter((book) => book.rating >= action.payload)
            } 
        
        default:
            return state;
    }
}