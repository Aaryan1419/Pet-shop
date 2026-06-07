// Products.js
import React from "react";

function Products() {
  return (
    <section className="products">
      <h2>Popular Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <h3>Premium Dog Food</h3>
          <p>₹999</p>
        </div>

        <div className="product-card">
          <h3>Cat Scratcher</h3>
          <p>₹699</p>
        </div>

        <div className="product-card">
          <h3>Chew Toy</h3>
          <p>₹399</p>
        </div>
      </div>
    </section>
  );
}

export default Products;