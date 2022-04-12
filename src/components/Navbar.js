import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutAdmin = () =>{
    localStorage.removeItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z');
    localStorage.removeItem('userLoggedIn');
    window.location.reload(false)
  }

  const handleLogout= () =>{
    localStorage.removeItem('userLoggedIn');
    window.location.reload(false)
  }

  return (
    <Nav>
      <Logo href="/">
        Vee Gee<span></span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/cart">My Cart</MenuLink>
        <MenuLink href="/product">Product</MenuLink>
        <MenuLink href="/careers">Careers</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        {
          localStorage.getItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z')? 
          <MenuLink href='/admin'>Admin Page</MenuLink>:
          ''
        }
        {
          localStorage.getItem('j4r6vnbzstdxy1nrngz5efjigu09bx2z')? 
          <MenuLink onClick={() => handleLogoutAdmin()}>Logout Admin</MenuLink>:
          localStorage.getItem('userLoggedIn') ? 
          <MenuLink onClick={() => handleLogout()}>Logout</MenuLink>:
          <MenuLink href="/login">Login</MenuLink>
        }
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #d9915e;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  position: relative;
  z-index:9999999;
  &:hover {
    color: black;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #d9915e;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #d9915e;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;