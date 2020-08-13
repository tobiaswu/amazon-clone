import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img19/cbcc/maple/bau40_2019_maple_ur_770x60_v1._CB436734072_.jpg"
          alt="checkout ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Ihr Amazon-Einkaufswagen ist leer</h2>
            <p>
              Sie haben keine Produkte in Ihrem Warenkorb. Um ein oder mehrere
              Produkte hinzuzufügen, klicken Sie "In den Einkaufswagen" neben
              dem Produkt.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Einkaufswagen</h2>

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
