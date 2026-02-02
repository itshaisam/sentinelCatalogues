const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const pdfs = ["SentinalKits.pdf", "SentinelPacks.pdf"];

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  const links = pdfs
    .map((pdf) => `<li><a href="/${pdf}">${pdf}</a></li>`)
    .join("\n      ");

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sentinel Catalogues</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 60px auto; padding: 0 20px; }
    h1 { margin-bottom: 24px; }
    ul { list-style: none; padding: 0; }
    li { margin: 12px 0; }
    a { color: #0066cc; text-decoration: none; font-size: 1.1em; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Sentinel Catalogues</h1>
  <ul>
      ${links}
  </ul>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
