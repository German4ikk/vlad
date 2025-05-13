# Repair Master Website

A bilingual (Russian and Estonian) business card website for a repair master that can also function as a Telegram Mini App.

## Features

- Fully responsive design that works on all devices
- Bilingual support (Russian and Estonian)
- Telegram Mini App integration
- Contact form for client requests
- Gallery of completed work
- Services section
- Client reviews
- Location information

## Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for language switching and Telegram integration
- `images/` - Directory for website images

## How to Use

1. Clone or download this repository
2. Open `index.html` in a web browser to view the website locally
3. Customize the content, images, and contact information as needed

## Telegram Mini App Integration

This website is designed to work as a Telegram Mini App. To set it up:

1. Host the website on a secure server (HTTPS required)
2. Create a new bot via BotFather in Telegram
3. Use the `/newapp` command in BotFather to create a mini app
4. Set the website URL as the mini app URL
5. Configure the bot to handle form submissions via the `sendData` method

## Customization

- Replace placeholder images in the `images/` directory with actual project photos
- Update contact information in `index.html`
- Modify services and other content as needed
- Add or edit translations in the `translations` object in `script.js`

## Deployment

For the best performance, deploy this website to a static hosting service like:

- Netlify
- GitHub Pages
- Vercel
- Firebase Hosting

## License

This project is available for personal and commercial use.
