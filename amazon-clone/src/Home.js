import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home--image"
          src="https://m.media-amazon.com/images/I/710GT7VbfNL._SX3000_.jpg"
          alt=""
        />
        <div className="home--row">
          <Product
            title="Rich Dad Poor data"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg"
            rating={3}
          />
          <Product
            title="Apple iPhone 14 Pro 256GB Space Black"
            price={1599.99}
            image="https://m.media-amazon.com/images/I/61XO4bORHUL._AC_UL640_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home--row">
          <Product
            title="Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)"
            price={499.99}
            image="https://m.media-amazon.com/images/I/71YAsNWuoPL._AC_UL640_QL65_.jpg"
            rating={3}
          />
          <Product
            title="Apple Watch SE (GPS + Cellular, 44mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
            price={399.99}
            image="https://m.media-amazon.com/images/I/71ZyBh4LQuL._AC_UL640_QL65_.jpg"
            rating={4}
          />
          <Product
            title="Apple AirPods (3rd Generation) with Lightning Charging Case"
            price={299.99}
            image="https://m.media-amazon.com/images/I/61CVih3UpdL._AC_UL640_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home--row">
          <Product
            title="Apple Pro Display XDR (32-inch with Retina 6K Display, Nano-Texture Glass)"
            price={5999.99}
            image="https://m.media-amazon.com/images/I/71pEQi2sX3L._AC_UL640_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
