import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products');
  //   const data = await res.json();
  //   console.log(data);
  //   setProducts(data);
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  // return <div>Products</div>;

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went worng...!!</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="product image" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );

  return <h1>Loading...</h1>;
};

export default Products;

// FAKESTORE API  -----------------------------------------------------------

// import React, { useState, useEffect } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     console.log(data);
//     setProducts(data);
//   };

//   // useEffect(() => {
//   //   fetchProducts();
//   // }, []);

//   function handleFetch() {
//     fetchProducts();
//   }

//   // return <div>Products</div>;
//   return (
//     <div className="flex justify-center align-center ">
//       <div
//         style={{
//           width: '1200px',
//           padding: '20px',
//           margin: '20px',
//           border: '1px solid red',
//         }}
//       >
//         <p>Start editing to see some magic happen :)</p>
//         <p>Data Fecthing via an API</p>
//         <button onClick={handleFetch}>FETCH PRODUCTS</button>
//       </div>
//       {products.map((product) => {
//         return (
//           <>
//             <h2>{product.title}</h2>
//             <p key={product.id}>{product.category}</p>
//             <img
//               src={product.image}
//               alt="product image"
//               style={{ width: '100px', border: '1px solid red' }}
//             />
//             <p>{product.price}</p>
//             <hr />
//           </>
//         );
//       })}
//     </div>
//   );

//   return <h1>Loading...</h1>;
// };

// export default Products;

// TRY REDDIT API  -----------------------------------------------------------
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
