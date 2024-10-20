const products = [
    {
        name: 'Louis Vuitton Bag',
        path: 'Images/Luivitton.png.jpg',
        price: '$2500',
        memes: [{ text: 'Luxury on the Go', audioPathh: 'audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Air Jordan',
        path: 'Images/shoes.png.jpg',
        price: '$920',
        memes: [{ text: 'Step in Style', audioPathh: 'audio/80shoes.mp4' }]
    },
    {
        name: 'Rocking Horse',
        path: 'Images/dogdonkey.jpg.jpg',
        price: '$50000',
        memes: [{ text: 'Animal Adventures', audioPathh: 'audio/donkeydog.mp4' }]
    },  
    {
        name: 'Hairband',
        path: 'Images/hairband.png',
        price: '$6',
        memes: [{ text: 'Tie it up!', audioPathh: 'audio/miniskirt.mp4' }]
    },
    {
        name: 'iPhone',
        path: 'Images/iphone.png.jpg',
        price: '$999',
        memes: [{ text: 'Next-Gen Tech', audioPathh: 'audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Banana',
        path: 'Images/banana.png',
        price: '$10',
        memes: [{ text: 'Tropical delight', audioPathh: 'audio/Banana,cucumber,eggplant.mp4' }]
    },
    // {
    //     name: 'Cucumber',
    //     path: 'Images/cucumber.png',
    //     price: '$15',
    //     memes: [{ text: 'Cool as a cucumber', audioPathh: 'audio/Banana,cucumber,eggplant.mp4' }]
    // },
    {
        name: 'Danda',
        path: 'Images/danda.jpg',
        price: '$8',
        memes: [{ text: 'Stay in line', audioPathh: 'audio/spank,danda.mp4' }]
    },
    // {
    //     name: 'Eggplant',
    //     path: 'Images/eggplant.png',
    //     price: '$12',
    //     memes: [{ text: 'Egg-cellent choice!', audioPathh: 'audio/Banana,cucumber,eggplant.mp4' }]
    // },
    // {
    //     name: 'Handcuffs',
    //     path: 'Images/handcuffs.png',
    //     price: '$20',
    //     memes: [{ text: 'Locked and loaded', audioPathh: 'audio/handcuff.mp4' }]
    // },
    {
        name: 'Heart Cushion',
        path: 'Images/heartCushion.png',
        price: '$18',
        memes: [{ text: 'Soft and sweet', audioPathh: 'audio/purse.mp4' }]
    },
    {
        name: 'Lauger',
        path: 'Images/lauger.png',
        price: '$25',
        memes: [{ text: 'Chill vibes', audioPathh: 'audio/last.mp4' }]
    },
    {
        name: 'Melon',
        path: 'Images/melon.png',
        price: '$10',
        memes: [{ text: 'Melon madness!', audioPathh: 'audio/melon1,2.mp4' }]
    },
    {
        name: 'Miniskirt',
        path: 'Images/miniskirt.png',
        price: '$22',
        memes: [{ text: 'Stylish choice!', audioPathh: 'audio/miniskirt.mp4' }]
    },
    {
        name: 'Spank',
        path: 'Images/spank.png',
        price: '$30',
        memes: [{ text: 'Playful vibes', audioPathh: 'audio/spank,danda.mp4' }]
    },
    {
        name: 'Teddy',
        path: 'Images/teddy.png',
        price: '$35',
        memes: [{ text: 'Cuddle buddy', audioPathh: 'audio/teddy.mp4' }]
    },
    {
        name: 'Toilet Paper',
        path: 'Images/toiletpaper.png',
        price: '$3',
        memes: [{ text: 'Emergency essential', audioPathh: 'audio/last.mp4' }]
    },
    {
        name: 'Vaseline',
        path: 'Images/vaseline.png',
        price: '$5',
        memes: [{ text: 'Stay moisturized', audioPathh: 'audio/purse.mp4' }]
    },
    {
        name: 'iPad',
        path: 'Images/ipad.jpg.jpg',
        price: '$799',
        memes: [{ text: 'Powerful and Portable', audioPathh: 'audio/AukatMeRahoMeme.mp4' }]
    },
    
    {
        name: 'MacBook',
        path: 'Images/Macbook.png.jpg',
        price: '$1299',
        memes: [{ text: 'Performance Unleashed', audioPathh: 'audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Melon 2',
        path: 'Images/melon2.png',
        price: '$12',
        memes: [{ text: 'Double the fun', audioPathh: 'audio/melon1,2.mp4' }]
    },
];



function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('col-4');

    const img = document.createElement('img');
    img.src = product.path;
    img.alt = product.name;

    const title = document.createElement('h4');
    title.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = product.price;

    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = `
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
        <i class="far fa-star"></i>
    `;

    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'View Details';

    // Navigate to the product details page with URL parameters
    button.onclick = () => {
        const url = new URL('product.html', window.location.origin);
        url.searchParams.set('name', product.name);
        url.searchParams.set('imagePath', product.path);
        url.searchParams.set('price', product.price);
        url.searchParams.set('description', product.memes[0].text);
        url.searchParams.set('videoPath', product.memes[0].audioPathh);
        window.location.href = url;
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(rating);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

const productContainer = document.getElementById('productContainer');
products.forEach(product => {
    const card = createCard(product);
    productContainer.appendChild(card);
});