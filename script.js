// ====================================
// LITERARY CATALOG - JAVASCRIPT PRACTICE
// ====================================

console.log("📚 The Literary Catalog - JavaScript Loaded!");

// DAY 1: Variables
const siteName = "The Literary Catalog";
let totalBooks = 150;
let isOpen = true;

console.log("Site:", siteName);
console.log("Total Books:", totalBooks);

// DAY 2: Navigation Active State
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        
        this.classList.add('active');
        console.log("Navigated to:", this.textContent);
    });
});

// DAY 2: Store Hours Check
const currentHour = new Date().getHours();

if (currentHour >= 9 && currentHour < 18) {
    console.log("📚 Store is OPEN!");
} else {
    console.log("🔒 Store is CLOSED");
}

// DAY 3: Book Categories Loop
const bookCategories = ["Fiction", "Mystery", "Romance", "Sci-Fi", "Biography"];

console.log("=== Book Categories ===");
for (let i = 0; i < bookCategories.length; i++) {
    console.log((i + 1) + ". " + bookCategories[i]);
}

// Interactive Order Counter
let orderCount = 0;
const orderButton = document.querySelector('.order-now');

if (orderButton) {
    orderButton.addEventListener('click', function(event) {
        event.preventDefault();
        orderCount++;
        
        if (orderCount === 1) {
            console.log("🎉 First order!");
        } else if (orderCount >= 5) {
            console.log("🏆 " + orderCount + " orders!");
        } else {
            console.log("📖 Order #" + orderCount);
        }
        
        this.textContent = "Order Now (" + orderCount + ")";
    });
}

console.log("=== JavaScript Practice Complete ===");