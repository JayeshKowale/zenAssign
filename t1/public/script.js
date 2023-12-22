
async function fetchProducts() {
    console.log("fetching")
    try {
        const response = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
        const data = await response.json();
        console.log(data)
        const productsArray = Object.values(data.products);

    const sortedByPopularity = productsArray.sort((a, b) => b.popularity - a.popularity);

const presentation = sortedByPopularity.map(product => {
    return {
        Title: product.title,
        Price: `$${product.price}`,
        Popularity: product.popularity
    };
});
const productListDiv = document.getElementById('product-list');

const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();
const headers = ['Title', 'Price', 'Popularity'];

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(headerText));
    headerRow.appendChild(th);
});

const tableBody = document.createElement('tbody');

presentation.forEach(product => {
    const row = tableBody.insertRow();
    const values = [product.Title, product.Price, product.Popularity];

    values.forEach(value => {
        const cell = row.insertCell();
        cell.appendChild(document.createTextNode(value));
    });
});

table.appendChild(tableBody);
productListDiv.appendChild(table);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
