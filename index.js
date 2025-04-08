const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL || "https://www.wonderwalk.app/"; // Fallback URL

app.get("*", (req, res) => {
  res.redirect(301, redirectUrl);
});

app.listen(port, () => {
  console.log(`Redirecting to ${redirectUrl}`);
});

module.exports = app;