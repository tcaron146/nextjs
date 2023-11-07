import React, { useState, useEffect } from "react";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data.slice(0, 20));
    };

    fetchProducts();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input type="text" placeholder="Search Products" onChange={handleSearchInputChange} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td><img src={product.image} alt={product.title} width="100" height="100" /></td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}