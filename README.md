# Bimal's Product Review Blog

A simple, clean blog application for reviewing products with direct links to purchase.

## Features

- Clean, modern design with responsive layout
- Product review cards with ratings
- Direct links to products
- Easy to add new reviews
- No build process required - just open and view

## How to Use

1. **View the Blog**: Simply open `index.html` in your web browser
2. **Add New Reviews**: Edit the `script.js` file and add new review objects to the `reviews` array

## Adding New Product Reviews

To add a new product review, edit `script.js` and add a new object to the `reviews` array:

```javascript
{
    id: 5,
    title: "Your Product Name",
    rating: 5, // Rating out of 5
    date: "January 20, 2026",
    review: "Your detailed review here...",
    productLink: "https://link-to-product.com"
}
```

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Product reviews data and rendering logic

## Technologies Used

- HTML5
- CSS3 (with Grid and Flexbox)
- Vanilla JavaScript

## License

MIT License - Feel free to use and modify as needed!