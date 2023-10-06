import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51NrN4GSAe9TMDJfID5wRSMek2JsKHi50qi9uEc3Klgk0GeCBfunFGWHXQ6YmwY7vRsyQvYWOuFlUqW2eSuyXGqFz00ooV6kAZH"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will runs only once when  the app component is loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS>>>", authUser);
      if (authUser) {
        //if the user is just Loggeed in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM

    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
