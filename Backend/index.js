const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NrN4GSAe9TMDJfIZpnChQpaL2ARtKKkJ4KxML2UqAlvUMUpnHZohOcuzhTiwhKX7iLXfQDbn5XAjL77y39TgpX3000A0WqZD8"
);
const app = express();

//-Middleware
// Enable CORS for your app
app.use(cors({ origin: true }));

app.use(express.json());
// API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.get("/alex", (request, response) => {
  response.status(200).send("Hello Aniket! Welcome to our amazon-clone");
});

app.post("/payments/create", async (request, response) => {
  const total = request.body.total; // Get the total amount from the request body
  console.log(
    "The Payment Request is Recieved BOOM !!!, for this amount >>>",
    total
  );
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Convert total to cents
      currency: "USD",
      payment_method_types: ["card"],
    });
    //ok-create
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    response.status(500).json({ error: "Failed to create payment intent" });
  }
});
// Your server-side route handling the payment creation

// Define and export the Cloud Function
exports.api = functions.https.onRequest(app);
// example endpoint
// // http://127.0.0.1:5001/challenge-bcdd5/us-central1/api
