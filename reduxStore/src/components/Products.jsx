import React from 'react';
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  function handleFetch() {
    fetchProducts();
  }

  // return <div>Products</div>;
  return (
    <div className="flex justify-center align-center ">
      <div
        style={{
          width: '1200px',
          padding: '20px',
          margin: '20px',
          border: '1px solid red',
        }}
      >
        <p>Start editing to see some magic happen :)</p>
        <p>Data Fecthing via an API</p>
        <button onClick={handleFetch}>FETCH PRODUCTS</button>
      </div>
      {products.map((product) => {
        return (
          <>
            <h2>{product.title}</h2>
            <p key={product.id}>{product.category}</p>
            <img
              src={product.image}
              alt="product image"
              style={{ width: '100px', border: '1px solid red' }}
            />
            <p>{product.price}</p>
            <hr />
          </>
        );
      })}
    </div>
  );

  return <h1>Loading...</h1>;
};

export default Products;

// TRY REDDIT API
//   const [posts, setPosts] = useState(null);
//   const targetUrl = 'https://www.reddit.com/r/blender.json';

//   const extractThumbnails = (data) =>
//     data.data.children
//       ?.filter((child) => child.data.thumbnail)
//       .map((post) => ({
//         image: post.data.thumbnail,
//         title: post.data.title,
//         link: post.data.url,
//       })) ?? null;

//   useEffect(() => {
//     const controller = new AbortController();
//     fetch(targetUrl, { signal: controller.signal, mode: 'no-cors' })
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(extractThumbnails(data));
//       })
//       .catch((err) => {
//         if (err.name != 'AbortError') {
//           //   console.error(err);
//         }
//       });
//     return () => controller.abort();
//   }, []);
//   if (posts) {
//     return (
//       <>
//         <h1>Latest Posts</h1>
//         <ul className="image-list">
//           {posts.map(({ link, title, image }) => (
//             <li key={link}>
//               <a href={link} target="_blank" title={title}>
//                 <img src={image} />
//               </a>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
