import styled from "styled-components";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  // background: #946d49;
  background: #200000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 5rem 2rem;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 55%;
  }

  a {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
      border-bottom: 1px solid white;
    }

    &:hover {
      color: #f4c26b;
    }
  }
`;

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <Link to="/" onClick={() => setOpen(false)}>
      Home
    </Link>
    <Link to="/about" onClick={() => setOpen(false)}>
      About Us
    </Link>
    <a href="/about#section_people" onClick={() => setOpen(false)}>
      Members
    </a>
    <Link to="/projects" onClick={() => setOpen(false)}>
      Projects
    </Link>
    <Link to="/blog" onClick={() => setOpen(false)}>
      Blogs
    </Link>
  </StyledMenu>
);

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  position: fixed;
  z-index: 3;
  cursor: pointer;
  color: white;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      background-color: #333;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, setOpen }) => (
  <div className="nav_menu">
    <div>
      <img src={logo} alt="" className="logo-image" />
    </div>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  </div>
);

export { Burger, Menu };
Burger.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
};
Menu.propTypes = {
  open: Proptypes.bool.isRequired,
  setOpen: Proptypes.func.isRequired,
};