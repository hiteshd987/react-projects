import React from 'react'
import { StyledBurger } from "./Burger.styled";
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <img src="https://www.pngfind.com/pngs/m/89-891718_download-shopping-cart-icon-shop-cart-logo-png.png"/>
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;