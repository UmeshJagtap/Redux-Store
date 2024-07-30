import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import CardsData from './CardsData';

import './style.css';

import { useDispatch } from 'react-redux';

const Cards = () => {
  const [data, setData] = useState(CardsData);
  //   console.log(data);
  // const handleAdd = (e) => {
  //   console.log(e.target.name);
  // };

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center p-2">Add to Cart Project</h2>
      <div className="row d-flex justify-content-center align-items-center p-2">
        {/* {JSON.stringify(data)} */}
        {data.map((element, id) => (
          <Card
            key={id}
            style={{ width: '20rem', border: 'none' }}
            className="mx-2 mt-4 card_style"
          >
            <Card.Img
              variant="top"
              src={element.imgdata}
              alt="product_image"
              style={{ height: '16rem', width: '20rem' }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
              <Card.Text>{'Price: ₹ ' + element.price}</Card.Text>
              <Card.Text>{element.rating}</Card.Text>
              <Card.Text>{element.somedata}</Card.Text>
              <div className="button_div d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className="col-lg-12"
                  onClick={() => send(element)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
