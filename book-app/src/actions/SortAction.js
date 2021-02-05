import {
    SORT_BY_CATEGORY,
    SORT_BY_RATING
} from '../constants/types';

export const sortByCategory = (category) => ({
    type: SORT_BY_CATEGORY,
    payload: category
});

export const sortByRating = (rating) => ({
    type: SORT_BY_RATING,
    payload: rating
});