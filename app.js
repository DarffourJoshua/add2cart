let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Yam with palaba sauce',
        image: 'https://i0.wp.com/greenviewsresidential.com/wp-content/uploads/2022/06/kontomire-stew.jpg?resize=1000%2C1250&ssl=1',
        price: 2100
    },
    {
        id: 2,
        name: 'Banku and tilapia',
        image: 'https://www.uvolunteer.net/wp-content/uploads/banku-with-tilapia-foods-to-try-when-you-volunteer-in-ghana.jpg',
        price: 2050
    },
    {
        id: 3,
        name: 'Fufu with goat meat',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiZguJAWBHo5S0LbrsjaOm_DwbnlizVPDzA&usqp=CAU',
        price: 2020
    },
    {
        id: 4,
        name: 'Omo tuo',
        image: 'https://ocdn.eu/images/pulscms/YzQ7MDA_/723c61ae6341c8343b375a73253f7f44.jpeg',
        price: 3000
    },
    {
        id: 5,
        name: 'Tuo Zaafi',
        image: 'data:image/jpeg;base64,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',
        price: 4000
    },
    {
        id: 6,
        name: 'Akple and okro soup',
        image: 'https://hmesweethome.files.wordpress.com/2020/03/akple-1-2.jpg',
        price: 4500
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count += value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}