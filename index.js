const products = [
    {
        name: 'Louis Vuitton Bag',
        path: 'Images/Luivitton.png.jpg',
        price: '$2500',
        memes: [{ text: 'Great for showing off your style or for hiding all your dirty little secrets!', audioPathh: './audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Air Jordan',
        path: 'Images/shoes.png.jpg',
        price: '$1920',
        memes: [{ text: ' Built for flying high on the court or for elevating your game when things get steamy!', audioPathh: './audio/80shoes.mp4' }]
    },
    {
        name: 'Rocking Horse',
        path: 'Images/dogdonkey.jpg.jpg',
        price: '$49999',
        memes: [{ text: 'A masterpiece ? More like a mess-terpiece', audioPathh: './audio/donkeydog.mp4' }]
    },  
    {
        name: 'Hairband',
        path: 'Images/hairband.png',
        price: '$89',
        memes: [{ text: 'Great for keeping your hair in place or for holding on tight when things get messy!', audioPathh: './audio/miniskirt.mp4' }]
    },
    {
        name: 'IPhone 16 pro max',
        path: 'Images/iphone.png.jpg',
        price: '$999',
        memes: [{ text: 'Because size matters... especially when its all in your hands !', audioPathh: './audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Banana',
        path: 'Images/banana.png',
        price: '$10',
        memes: [{ text: ' Great for a quick snack or for when you want to slip into a good time!', audioPathh: './audio/Banana,cucumber,eggplant.mp4' }]
    },
    // {
    //     name: 'Cucumber',
    //     path: 'Images/cucumber.png',
    //     price: '$15',
    //     memes: [{ text: 'Cool as a cucumber', audioPathh: './audio/Banana,cucumber,eggplant.mp4' }]
    // },
    {
        name: 'Danda',
        path: 'Images/danda.jpg',
        price: '$18',
        memes: [{ text: 'Stay in line', audioPathh: './audio/spank,danda.mp4' }]
    },
    // {
    //     name: 'Eggplant',
    //     path: 'Images/eggplant.png',
    //     price: '$12',
    //     memes: [{ text: 'Egg-cellent choice!', audioPathh: './audio/Banana,cucumber,eggplant.mp4' }]
    // },
    // {
    //     name: 'Handcuffs',
    //     path: 'Images/handcuffs.png',
    //     price: '$20',
    //     memes: [{ text: 'Locked and loaded', audioPathh: './audio/handcuff.mp4' }]
    // },
    {
        name: 'Heart Cushion',
        path: 'Images/heartCushion.png',
        price: '$38',
        memes: [{ text: 'Perfect for a cozy embrace or for getting a little too close during those late-night chats!', audioPathh: './audio/purse.mp4' }]
    },
    {
        name: 'Lounge Chair',
        path: 'Images/lauger.png',
        price: '$249',
        memes: [{ text: 'Great for kicking back and relaxing... or for getting cozy when things heat up!', audioPathh: './audio/last.mp4' }]
    },
    {
        name: 'Mast Melon',
        path: 'Images/melon.png',
        price: '$19',
        memes: [{ text: 'Juicy!', audioPathh: './audio/melon1,2.mp4' }]
    },
    {
        name: 'Miniskirt',
        path: 'Images/miniskirt.png',
        price: '$169',
        memes: [{ text: ' Short enough to keep things interesting but long enough to stay classy!', audioPathh: './audio/miniskirt.mp4' }]
    },
    {
        name: 'Baton',
        path: 'Images/spank.png',
        price: '$69',
        memes: [{ text: 'To keep in right track', audioPathh: './audio/spank,danda.mp4' }]
    },
    {
        name: 'Teddy',
        path: 'Images/teddy.png',
        price: '$85',
        memes: [{ text: 'Always down for a cuddle,No questions asked', audioPathh: './audio/teddy.mp4' }]
    },
    {
        name: 'Toilet Paper',
        path: 'Images/toiletpaper.png',
        price: '$29',
        memes: [{ text: 'Even the toughest problem need a Roll model', audioPathh: './audio/last.mp4' }]
    },
    {
        name: 'Vaseline',
        path: 'Images/vaseline.png',
        price: '$13',
        memes: [{ text: ' Smooth moves, anytime you need a little extra glide!', audioPathh: './audio/purse.mp4' }]
    },
    {
        name: 'IPad',
        path: 'Images/ipad.jpg.jpg',
        price: '$799',
        memes: [{ text: 'Bigger, better and always ready to be touched', audioPathh: './audio/AukatMeRahoMeme.mp4' }]
    },
    
    {
        name: 'MacBook M2',
        path: 'Images/Macbook.png.jpg',
        price: '$1299',
        memes: [{ text: 'Handles more tabs than you can, and still never slows down!', audioPathh: './audio/AukatMeRahoMeme.mp4' }]
    },
    {
        name: 'Musk Melon ',
        path: 'Images/melon2.png',
        price: '$12',
        memes: [{ text: ' Sweet, juicy, and always ready to be handled with care!', audioPathh: './audio/melon1,2.mp4' }]
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