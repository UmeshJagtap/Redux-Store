import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/esm/Table';

import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  function handleCart() {
    console.log('Handling Cart Now');
  }

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

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
            badgeContent={getdata.length}
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
          {/* Your Cartis Empty */}
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: '24rem', padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurent Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr key={e.id}>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: '5rem', height: '5rem' }}
                                alt={e.rname}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price: ₹ {e.price}</p>
                            <p>Quantity: {e.qnty}</p>
                            <p
                              style={{
                                color: 'red',
                                fontSize: 20,
                                cursor: 'pointer',
                              }}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: 'red',
                              fontSize: 20,
                              cursor: 'pointer',
                            }}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : ₹ 300</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{
                width: '20rem',
                height: '5rem',
                padding: 10,
                position: 'relative',
              }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: 'pointer',
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src="../cart.gif"
                alt="Cart-Icon"
                className="emptycart_img"
                style={{ width: '5rem', padding: 10 }}
              ></img>
            </div>
          )}
        </Menu>
      </Navbar>
      {/* <hr /> */}
    </>
  );
}
