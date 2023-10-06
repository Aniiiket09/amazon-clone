import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id={345}
            title="The Lean Startup : How Constant Innovation Creates Radially Sucesssfully Business Paperback "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5}
          />
          <Product
            id={345656}
            title="KenWood KMix Stand mixer for Baking, Stylish kitchen Mixer with K-beater,Dough Hook and Whisk , 5 liter Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={123345}
            title="SAMSUNG LC49RGDFJKSlfLD 49 Curverd LED Gaming Monitor"
            price={199}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id={4444}
            title="Amazon Eco 3rd Generation | smarat Speaker With Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg"
            rating={5}
          />
          <Product
            id={5555}
            title="New Apple Ipad Pro (12.9-inch,wifi ,128GB)- Silver 4th Genration"
            price={560.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={88998}
            title="SAMSUNG LC49RGDFJKSlfLD 49 Curverd LED Gaming Monitor - Super Altra Wide Dual WQHD 5120 x 1440"
            price={1094.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
