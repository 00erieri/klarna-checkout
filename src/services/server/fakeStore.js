import fetch from 'node-fetch';

async function getItemById(id) {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);

	if (response.ok) {
		const product = await response.json();
		return product;
	} else {
		console.error('Error', response.status, response.statusText);
		throw new Error('500 error, Fake store api is not working');
	}
}

module.exports = { getItemById };
