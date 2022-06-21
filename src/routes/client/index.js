const app = require('../../loaders/express-handlebars');
const { createOrder } = require('../../services/server/klarna');
const { getItemById } = require('../../services/server/fakeStore');

app.get('/checkout/:product_id', async function (req, res, next) {
	const { product_id } = req.params;
	const product = await getItemById(product_id);
	const klarnaJsonResponse = await createOrder(product);
	const html_snippet = klarnaJsonResponse.html_snippet;
	res.render('checkout', {
		klarna_checkout: html_snippet
	});
});

module.exports = app;
