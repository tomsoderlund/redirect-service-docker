const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const redirectBase = process.env.REDIRECT_URL || "https://www.wonderwalk.app";

app.get("*", (req, res) => {
  const fullRedirectUrl = `${redirectBase}${req.originalUrl}`;
  res.redirect(301, fullRedirectUrl);
});

app.listen(port, () => {
  console.log(`Redirecting all requests to ${redirectBase}`);
});

module.exports = app;