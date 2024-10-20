const products = [
    { name: 'Banana', path: 'Images/banana.png', price: '$10', memes: [{ text: 'Meme 1', audioPathh: './audio/meme1.mp4' }] },
    { name: 'Cucumber', path: 'Images/cucumber.png', price: '$15', memes: [{ text: 'Meme 2', audioPathh: './audio/meme2.mp4' }] },
    { name: 'Danda', path: 'Images/danda.jpg', price: '$8', memes: [{ text: 'Meme 3', audioPathh: './audio/meme3.mp4' }] },
    { name: 'Eggplant', path: 'Images/eggplant.png', price: '$12', memes: [{ text: 'Meme 4', audioPathh: './audio/meme4.mp4' }] },
    { name: 'Hairband', path: 'Images/hairband.png', price: '$6', memes: [{ text: 'Meme 5', audioPathh: './audio/meme5.mp4' }] }
];

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = product.path;
    img.alt = product.name;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h3');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.innerHTML = `<span>Price:</span> ${product.price}`;

    const memeText = document.createElement('p');
    memeText.innerHTML = `<span>Meme:</span> ${product.memes[0].text}`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);
    cardContent.appendChild(memeText);
    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
}

const productContainer = document.getElementById('productContainer');
products.forEach(product => {
    const card = createCard(product);
    productContainer.appendChild(card);
});
