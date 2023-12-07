const express = require('express');
const app = express();
const port = 3000;


app.get('/api/menu', (req, res) => {
  const menuData = [
    { name: 'Item 1', description: 'Description 1', image: '/images/item1.jpg' },
    { name: 'Item 2', description: 'Description 2', image: '/images/item2.jpg' },
    // Add more mock data as needed
  ];

  res.json(menuData);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
