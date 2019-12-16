const express = require('express');

const app = express();

const PORT = 8080;

app.get('/info', (req, res) => {
    var fs = require("fs");
    var contents = fs.readFileSync("package.json");
    var jsonContent = JSON.parse(contents);

    var data = res.json({ serverName: jsonContent.name, serverVersion: jsonContent.version});

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});