const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Hello World!",
    testing: "testing 3",
    timestamp: new Date().toISOString(),
  });
});

// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;
