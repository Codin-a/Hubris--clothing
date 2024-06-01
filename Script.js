document.addEventListener("DOMContentLoaded", function() {
    const cart = [];
    const cartIcon = document.querySelector('.cart-icon');

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(event) {
            if (button.textContent === 'Add to Cart') {
                const productName = button.parentElement.querySelector('h1').textContent;
                const productPrice = button.parentElement.querySelector('p').textContent;
                cart.push({ name: productName, price: productPrice });
                alert('Added to cart: ' + productName);
                updateCartIcon();
            }
        });
    });

    function updateCartIcon() {
        cartIcon.textContent = `🛒 (${cart.length})`;
    }

    // Modal functionality
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Logged in!');
        closeModal('loginModal');
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Registered!');
        closeModal('registerModal');
    });
});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}