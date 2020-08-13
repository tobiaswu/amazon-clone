import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/alexrider/ALEXR_S1_GWBleedingHero_FT_COVIDUPDATE__XSite_3000X1200PV_de-DE._CB408428035_.jpg"
        alt="amazon prime banner"
      ></img>

      <div className="home__row">
        <Product
          id="121312"
          title="Clean Code in JavaScript: Develop reliable, maintainable, and robust JavaScript"
          price={28.87}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71a+EV3OuHL.jpg"
        />
        <Product
          id="234534"
          title="JBL Flip Essential Bluetooth Box in Grau – Wasserdichter, portabler Lautsprecher mit herausragendem Sound – Bis zu 10 Stunden kabellos Musik abspielen"
          price={2338.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71y%2BlIHVdAL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="653453"
          title="Echo Plus (2. Gen.), mit Premiumklang und integriertem Smart Home-Hub, Anthrazit Stoff"
          price={146.2}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WvxHqKqeL._AC_SL1000_.jpg"
        />
        <Product
          id="121332"
          title="Apple iPhone 11 Pro (256 GB) - Space Grau"
          price={1164.77}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81HSzsIkJdL._AC_SL1500_.jpg"
        />
        <Product
          id="947439"
          title="Russell Hobbs Standmixer Glas Steel 2-in-1, inkl. To-Go-Becher & Deckel, 1.5l Glasbehälter, Mixer 0.8 PS-Motor, Impuls-/Ice-Crush Funktion, mini Smoothie-Maker 23821-56 [Energieklasse A+++]"
          price={49.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71t70zegymL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="234534"
          title="JBL Flip Essential Bluetooth Box in Grau – Wasserdichter, portabler Lautsprecher mit herausragendem Sound – Bis zu 10 Stunden kabellos Musik abspielen"
          price={59.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81yPOU-UkZL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
