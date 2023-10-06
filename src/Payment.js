import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // useEffect(() => {
  //   const getClientSecret = async () => {
  //     try {
  //       // Make sure that getBasketTotal and basket are defined correctly
  //       const response = await axios.post("/payments/create", {
  //         total: getBasketTotal(basket) * 100,
  //         description: "Your payment description here", // Provide a description for the payment
  //       });
  //       setClientSecret(response.data.clientSecret);
  //     } catch (error) {
  //       console.error("Error fetching client secret:", error);
  //     }
  //   };
  //   getClientSecret();
  // }, [basket]); // This useEffect will run whenever basket changes
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>>", clientSecret);

  const handleSubmit = async (event) => {
    //do all the fancy stripe stufff..
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // const paymentIntent = result.paymentIntent;
        // console.log("paymentIntent:", paymentIntent);
        //paymentIntent =payment confirmation
        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created,
        //   });
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // dispatch({
        //   type: "EMPTY_BASKET",
        // });

        history("/orders");
      });
  };
  const handleChange = (event) => {
    //listen for the changes in CardElement
    //and display any errors as the customer types their card details
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/*payment section delivery address  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p> H NO-123, MG ROAD</p>
            <p>Maharashtra, Pandharpur, 413304</p>
          </div>
        </div>
        {/*payment section review item  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.key} // Use the unique key as the key prop
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*payment section payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="paymet_details">
            {/**Strip Magic Will go */}

            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Totals: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} //part of homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {/*Error */}

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
