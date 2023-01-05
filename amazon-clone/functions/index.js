const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MMV4NSEm0ElJChbruy24p94BuGLMsyXCzx4tKoyKHBvy3YMtOht1CCmCmHHAzZc1iP1i8T6J4oJo0hduhMI4T0100JJQGoUcH"
);

//API

//-APP Config
const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//-API routes

app.get("/", (request, response) => response.status(200).send("Hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved !!!!!!!!!!!! amount >>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "Software development services",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  });
  console.log("the secret ", paymentIntent.client_secret);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen Command
exports.api = functions.https.onRequest(app);

//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
