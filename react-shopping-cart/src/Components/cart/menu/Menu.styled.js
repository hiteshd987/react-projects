import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  width: 400px;
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
  
  @media (max-width: 576px) {
    width: 100%;
  }

  .cart-products-section {
    width: 350px
  }

  .cart-products-row {
    border: 2px solid black;
    width: 100%;
  }

  .cart-products-image {
    width:100%;
  }

    // &:hover {
    //   color: yellow;
    // }
  }
`;