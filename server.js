const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.use(express.static(path.join(__dirname)));

app.get('/api/test', (req, res) => {
  const hardcodedData = {
    menuItems: [
      { name: 'Item 1', description: 'Description 1', price: 10.99 },
      { name: 'Item 2', description: 'Description 2', price: 8.99 },
    ],
  };

  res.json(hardcodedData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
