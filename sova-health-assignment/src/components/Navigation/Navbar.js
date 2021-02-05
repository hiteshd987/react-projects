import React from 'react';
// import './Navbar.css';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: rgb(41, 56, 92);
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    // padding: 0px 100px;
    height: 50px;
    margin: 0px 0px 0px 250px;
  }

  .nav-img {
    width: 100%;
    height: 100%;
  }

  .btn-getStarted {
    background-color: #eb8181;
    color: #fff;
    border-radius: 20px;
    width: 10vw;
    height: 5vh;
    margin: 5px 250px 10px 50px;
  }

  .btn-getStarted:hover {
    background-color: #94d6ba;
    color:black;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    .btn-getStarted {
      display: none;
    }
  }
`

const Navbar = () => {
    return (
        <Nav className="nav-main">
            <div className="logo">
              <img className="nav-img" src="https://static.wixstatic.com/media/885c0e_33bd8c6486544c679a27ee20392a5932~mv2.png/v1/fill/w_206,h_75,al_c,q_85,usm_0.66_1.00_0.01/sova_FINAL-02.webp"/>
            </div>
            <Burger />
            <button className="btn-getStarted">Get Started</button>
        </Nav>
    )
}

export default Navbar
