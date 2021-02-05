import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }

  .nav-link-inner{
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    return (
      <UL open={open}>
        <li><Link className="nav-link-inner" to="/">HOME</Link></li>                                       
        <li><Link className="nav-link-inner" to="/home">HOW IT WORKS</Link></li>                     
        <li><Link className="nav-link-inner" to="/home">PRICING</Link></li>                               
        <li><Link className="nav-link-inner" to="/home">SCIENCE</Link></li>
        <li><Link className="nav-link-inner" to="/home">FAQs</Link></li>                                     
        <li><Link className="nav-link-inner" to="/home">ABOUT US</Link></li> 
      </UL>
    )
  }
  
  export default RightNav