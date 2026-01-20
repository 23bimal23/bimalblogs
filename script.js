// Sample product reviews data
const reviews = [
    {
        id: 1,
        title: "Sony WH-1000XM5 Headphones",
        rating: 5,
        date: "January 15, 2026",
        review: "Exceptional noise cancellation and sound quality. The battery life is impressive, lasting over 30 hours. Comfortable for long listening sessions. Highly recommended for travelers and audiophiles.",
        productLink: "https://www.amazon.com/Sony-WH-1000XM5-Canceling-Headphones/dp/B09XS7JWHH"
    },
    {
        id: 2,
        title: "Logitech MX Master 3S Mouse",
        rating: 4,
        date: "January 10, 2026",
        review: "Ergonomic design with excellent precision. The side scroll wheel is perfect for horizontal navigation. Slightly pricey but worth it for productivity. Works seamlessly across multiple devices.",
        productLink: "https://www.logitech.com/en-us/products/mice/mx-master-3s.html"
    },
    {
        id: 3,
        title: "Kindle Paperwhite (2024)",
        rating: 5,
        date: "January 5, 2026",
        review: "Perfect e-reader with a crisp display and adjustable warm light. Waterproof design is great for reading by the pool. Battery lasts weeks on a single charge. A must-have for book lovers.",
        productLink: "https://www.amazon.com/kindle-paperwhite/dp/B08KTZ8249"
    },
    {
        id: 4,
        title: "Anker PowerCore 20000mAh",
        rating: 4,
        date: "December 28, 2025",
        review: "Reliable portable charger with high capacity. Can charge my phone multiple times. A bit heavy but the capacity makes up for it. Great for travel and emergencies.",
        productLink: "https://www.anker.com/products/a1271"
    }
];

// Function to escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Function to generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

// Function to render reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews');
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('article');
        reviewCard.className = 'review-card';
        
        reviewCard.innerHTML = `
            <h2>${escapeHtml(review.title)}</h2>
            <div class="rating">${generateStars(review.rating)}</div>
            <div class="date">${escapeHtml(review.date)}</div>
            <p>${escapeHtml(review.review)}</p>
            <a href="${escapeHtml(review.productLink)}" class="product-link" target="_blank" rel="noopener noreferrer">
                View Product
            </a>
        `;
        
        reviewsContainer.appendChild(reviewCard);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', renderReviews);
