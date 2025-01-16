const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const productsRoute = require("./routes/ProductsRoute.js");
const cartRoute = require("./routes/CartRoute.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);

// Serve React Frontend in Production
if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, return React's index.html for unmatched routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
