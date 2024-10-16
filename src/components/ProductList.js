// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = () => {
  // This is placeholder data, later replaced by API calls
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: '$100' },
    { id: 2, name: 'Product 2', category: 'Category B', price: '$150' },
    // More product items...
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
