import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 className='logo'>Capstone Project</h1>
        </NavLink>
        <Bars />
        <NavMenu>
<<<<<<< HEAD
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
=======
          <NavLink to='/signup' activeStyle>
            Signup
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
>>>>>>> 218c01c3d5080de081bc67711bce4dbb1628dbf2
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;