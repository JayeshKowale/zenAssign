import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.static('public'));

app.get('/products', async (req, res) => {
    try {
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const data = await response.json();
        console.log('Fetched data:', data);

        // Extract products and convert into an array
        const productsArray = Object.values(data.products);

        // Sort the array of products by popularity
        const sortedProducts = productsArray.sort((a, b) => b.popularity - a.popularity);

        res.json(sortedProducts);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
