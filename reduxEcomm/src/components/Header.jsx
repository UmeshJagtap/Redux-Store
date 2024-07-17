import React, { useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NavLink } from 'react-router-dom';

export default function ColorSchemesExample() {
  function handleCart() {
    console.log('Handling Cart Now');
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ color: 'red', height: '5rem' }}
      >
        <Container>
          <NavLink to="/" className="text-decoration-none">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: 'pointer' }}
              onClick={handleCart}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          Your Cartis Empty
        </Menu>
      </Navbar>
      <hr />
    </>
  );
}
