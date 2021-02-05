import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img 
                className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Jupiter2020Phase3/Cashback_offer-1500x100.jpg" 
                alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items click on "Add to basket"  
                    </p>
                </div>
            ) : ( 
              <div>
                  <h2 className="checkout__title">Your Shopping Basket</h2>
                
                {/* List out all of the checkout products */}
                 {basket.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                 ))}
              </div>    
            )}
            </div>
            {basket.length > 0 && (
               <div className="checkout_right">
                   <Subtotal />
               </div>
            )}
        </div>
    );
}

export default Checkout
