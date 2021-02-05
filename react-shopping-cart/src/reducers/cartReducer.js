//import product from '../products_data.json';

const initialState ={
    cartItems: [],
    subTotal: 0.0,
}

const addItemToCart = (state, cart_items) => {
    let availableCartItems = state.cartItems.find(
        (item) => cart_items.id === item.id
    );

    if(availableCartItems === undefined){
        cart_items.quantity = 1;
        state.cartItems.push(cart_items);
        state.subTotal = state.subTotal + cart_items.price;
    }
    else{
        cart_items.quantity = ++cart_items.quantity;
        state.subTotal = state.subTotal + cart_items.price;
    }
    return state;
};

const cartReducer = (state = initialState, action) => {
    //  console.log(state.products[0].availableSizes);
    switch(action.type) {
        case 'ADD_TO_CART':
            let updatedState = addItemToCart(state, action.payload);
            return {
                ...updatedState,
            };
            // return{
            //     basket: state.products.filter((prod) => prod.id !== action.id)
            //      basket: state.products.filter((prod) => prod.id === action.id),
            // }
            // console.log(state.products.id);
            // state.products.filter(product => {
            //     return  product.id === action.id
            // })

            // console.log(state.basket);
            //     if(action.id !== state.basket.id){
            //         return{
            //             ...state,
            //             basket: [action.payload, ...state.basket],
            //         };
            //     }
        case 'REMOVE_FROM_CART':
            return action.payload;  
        default:
            return state;
    }
}

export default cartReducer;