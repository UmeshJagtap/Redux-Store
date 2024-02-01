import React from 'react';
import { useState, useEffect } from 'react';

const Products = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchProducts = async () = {
  //         res = await fetch('https://fakestoreapi.com/products');
  //         data = await res.json();
  //         console.log(data);
  //         setProducts(data);
  //     }
  //     fetchProducts();
  //   }, [])
  //   useEffect(() => {
  //     const fetchProducts = (props) = {
  //         res = fetch('https://fakestoreapi.com/products'),
  //         data = res.json(),
  //         console.log(data),
  //         // setProducts(data),
  //     }
  //     fetchProducts();
  //   }, [])

  //   return <div>Products</div>;
  const [posts, setPosts] = useState(null);
  const targetUrl = 'https://www.reddit.com/r/blender.json';

  const extractThumbnails = (data) =>
    data.data.children
      ?.filter((child) => child.data.thumbnail)
      .map((post) => ({
        image: post.data.thumbnail,
        title: post.data.title,
        link: post.data.url,
      })) ?? null;

  useEffect(() => {
    const controller = new AbortController();
    fetch(targetUrl, { signal: controller.signal, mode: 'no-cors' })
      .then((response) => response.json())
      .then((data) => {
        setPosts(extractThumbnails(data));
      })
      .catch((err) => {
        if (err.name != 'AbortError') {
          //   console.error(err);
        }
      });
    return () => controller.abort();
  }, []);
  if (posts) {
    return (
      <>
        <h1>Latest Posts</h1>
        <ul className="image-list">
          {posts.map(({ link, title, image }) => (
            <li key={link}>
              <a href={link} target="_blank" title={title}>
                <img src={image} />
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return <h1>Loading...</h1>;
};

export default Products;
