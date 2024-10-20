// Function to parse URL parameters
function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Extract the parameters from the URL
const productName = getParam('name');
const productImagePath = getParam('imagePath');
const productVideoPath = getParam('videoPath');
const productDescription = getParam('description');

// Populate the product details
document.getElementById('productName').textContent = productName;
document.getElementById('productImage').src = productImagePath;
document.getElementById('productVideo').src = productVideoPath;
document.getElementById('productDescription').textContent = productDescription;

// Function to navigate back to the products page
function goBack() {
    window.location.href = 'ecommerce.html'; // Adjust this path if necessary
}
