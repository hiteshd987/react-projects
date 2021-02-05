import { BookReducer } from './BookReducer';
import { SortReducer } from './SortReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    bookReducer: BookReducer,
    bookSortReducer: SortReducer
})