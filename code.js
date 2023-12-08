let menuLoaded = false;

function displayMenu() {
    const menuListElement = document.getElementById('menu-list');
    const menuLink = document.querySelector('a[href="#menu"]');

    if (menuListElement && menuLink && !menuLoaded) {
        menuLink.addEventListener('click', function handleClick() {
            menuLoaded = true;
            fetch('/api/menu')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Data from API:', data);
                    updateMenuList(data);
                })
                .catch(error => console.error('Error fetching data:', error));

            menuLink.removeEventListener('click', handleClick);
        });
    }
}


function updateMenuList(menuData) {
    const menuListElement = document.getElementById('menu-list');

    if (menuListElement) {
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

function changeAboutContentWithFadeInEffect() {
    const aboutContentElement = document.getElementById('about-content');

    if (aboutContentElement) {
        setTimeout(() => {
            aboutContentElement.innerHTML = `
                <h2>Why Are You Still Here? Get On Down To The UG!</h2>
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
};
  