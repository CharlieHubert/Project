const menuItems = [
    { name: 'Hamburger', description: 'Delight your taste buds with our classic Hamburger. A succulent beef patty topped with melted cheese, crispy bacon, fresh onions, lettuce, pickles, tomatoes, and your choice of signature sauce.', image: './images/burger.jpg' },
    { name: 'BLT', description: 'Indulge in the perfect combination of crispy Bacon, fresh Lettuce, and ripe Tomatoes, all nestled between toasted buns. Served with a side of golden Fries, Tater Tots, or creamy Mac and Cheese.', image: './images/blt.jpg' },
    { name: 'Grilled Chicken', description: 'Savor the flavors of our Grilled Chicken masterpiece! Choose your favorite toppings, sauce, and a delectable side for a personalized culinary experience.', image: './images/grilled chicken.jpg' },
    { name: 'Grilled Cheese', description: 'Experience pure comfort with our Grilled Cheese sandwich. Melted cheese between perfectly toasted bread – a simple yet satisfying delight.', image: './images/grilled cheese.jpg' },
    { name: 'Burrito', description: 'Wrap up your cravings with our Burrito! Choose between white or wheat tortillas, filled with flavorful rice, beans, succulent meat, queso, and your favorite toppings.', image: './images/burrito.jpg' },
    { name: 'Burrito Bowl', description: 'Enjoy all the goodness of our Burrito without the tortilla! Served in a bowl, this flavorful creation is a wholesome and satisfying choice.', image: './images/burritobowl.jpg' },
];

function displayMenu() {
    const menuListElement = document.getElementById('menu-list');

    if (menuListElement) {
        menuListElement.innerHTML = '';

        menuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'menuitems';
            listItem.innerHTML = `
                <img src="${item.image}">
                <section>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </section>
            `;
            menuListElement.appendChild(listItem);
        });
    }
}

function changeAboutContentWithFadeInEffect() {
    const aboutContentElement = document.getElementById('about-content');

    if (aboutContentElement) {
        setTimeout(() => {
            aboutContentElement.innerHTML = `
                <h2>What Are You Still Here? Get On Down To The UG!</h2>
                <img class="huge" src="./images/go.png">
            `;
            aboutContentElement.style.opacity = '0';
            aboutContentElement.style.opacity = '1';
        }, 15000);
    }
}

const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.querySelector('input[name="Name"]');
        const peopleInput = document.querySelector('input[name="People"]');
        const dateInput = document.querySelector('input[name="date"]');
        const messageInput = document.querySelector('input[name="Message"]');

        const message = `
            Name: ${nameInput.value}
            People: ${peopleInput.value}
            Date and Time: ${dateInput.value}
            Message: ${messageInput.value}
        `;

        alert('Message Sent:\n\n' + message);

        form.reset();
    });

function submitOrder() {
    const selectedItem = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    alert('Order Submitted!\nItem: ' + selectedItem + '\nQuantity: ' + quantity);
}

window.onload = () => {
    displayMenu();
    changeAboutContentWithFadeInEffect();
    fetchMenuData();
  };
  
  function fetchMenuData() {
    fetch('/api/menu')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process and use the fetched data as needed
        console.log(data);
        // For example, you can call a function to update your menu
        updateMenu(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function updateMenu(menuData) {
    const menuListElement = document.getElementById('menu-list');
  
    if (menuListElement) {
      menuListElement.innerHTML = '';
  
      menuData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'menuitems';
        listItem.innerHTML = `
            <img src="${item.image}">
            <section>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </section>
        `;
        menuListElement.appendChild(listItem);
      });
    }
  }