import React, { useState } from 'react'
import Menu from "./menu/Menu";
import Burger from "./burger/Burger";

function Cart() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

export default Cart;
