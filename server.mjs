import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve static files from the project directory
app.use(express.static(__dirname));

const menuItems = [
  { name: 'Hamburger', description: 'Delight your taste buds with our classic Hamburger. A succulent beef patty topped with melted cheese, crispy bacon, fresh onions, lettuce, pickles, tomatoes, and your choice of signature sauce.', image: './images/burger.jpg' },
  { name: 'BLT', description: 'Indulge in the perfect combination of crispy Bacon, fresh Lettuce, and ripe Tomatoes, all nestled between toasted buns. Served with a side of golden Fries, Tater Tots, or creamy Mac and Cheese.', image: './images/blt.jpg' },
  { name: 'Grilled Chicken', description: 'Savor the flavors of our Grilled Chicken masterpiece! Choose your favorite toppings, sauce, and a delectable side for a personalized culinary experience.', image: './images/grilled chicken.jpg' },
  { name: 'Grilled Cheese', description: 'Experience pure comfort with our Grilled Cheese sandwich. Melted cheese between perfectly toasted bread – a simple yet satisfying delight.', image: './images/grilled cheese.jpg' },
  { name: 'Burrito', description: 'Wrap up your cravings with our Burrito! Choose between white or wheat tortillas, filled with flavorful rice, beans, succulent meat, queso, and your favorite toppings.', image: './images/burrito.jpg' },
  { name: 'Burrito Bowl', description: 'Enjoy all the goodness of our Burrito without the tortilla! Served in a bowl, this flavorful creation is a wholesome and satisfying choice.', image: './images/burritobowl.jpg' },
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
