import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closedMenu = () => {
    document.querySelector(".sidebar").classList.remove("closed");
  }
  return (
    <div className="grid-container" >
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">From A to Z</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Signin</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closedMenu}>X</button>
      <ul>
        <li>
          <a href="index.html">Sneakers</a>
        </li>
        <li>
          <a href="index.html">Basketball Shoes</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
                <div className="product-name"></div>
                  <a href="product.html">Red Sneakers</a>
                <div className="product-brand">Vans</div>
                <div className="product-price">$40</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
          </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
                <div className="product-name"></div>
                  <a href="product.html">Red Sneakers</a>
                <div className="product-brand">Vans</div>
                <div className="product-price">$40</div>
                <div className="product-rating">4.5 Stars (10 reviews)</div>
              </div>
            </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/red_sneakers.jpg" alt="product" />
              <div className="product-name"></div>
                <a href="product.html">Red Sneakers</a>
              <div className="product-brand">Vans</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 reviews)</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  );
}

export default App;
