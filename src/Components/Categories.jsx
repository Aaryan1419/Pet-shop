// Categories.js
import React from "react";

function Categories() {
  return (
    <section className="categories">
      <h2>Shop By Category</h2>

      <div className="category-container">
        <div className="card">🐶 Dog Food</div>
        <div className="card">🐱 Cat Food</div>
        <div className="card">🧸 Toys</div>
        <div className="card">🦴 Treats</div>
      </div>
    </section>
  );
}

export default Categories;