
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		nutsFree: true,
		lactoseFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 10.00
	},
	{
		name: "nuts",
		nutsFree: false,
		lactoseFree: true,
		organic: false,
		price: 2.30
	},
	{
		name: "Pesto Sauce",
		nutsFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.25
	},
	{
		name: "Pasta",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 5.35
	},
	{
		name: "Cookies",
		nutsFree: true,
		lactoseFree: false,
		organic: false,
		price: 3.99
	},
	{
		name: "Cashews",
		nutsFree: false,
		lactoseFree: true,
		organic: true,
		price: 5.20
	},
	{
		name: "Almond Milk",
		nutsFree: false,
		lactoseFree: true,
		organic: false,
		price: 6.10
	},

	{
		name: "Orange Juice",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 5.35
	},



];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, restriction2) {
	let product_names = [];

	for (let i = 0; i < prods.length; i += 1) {
		if ((restriction == "NutsFree") && (prods[i].nutsFree == true)) {
			if ((restriction2 == "Organic") && (prods[i].organic == true)) {
				product_names.push(prods[i].name);
			}
			else if (restriction2 == "NoneO") {
				product_names.push(prods[i].name);
			}

		}
		else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) {
			if ((restriction2 == "Organic") && (prods[i].organic == true)) {
				product_names.push(prods[i].name);
			}
			else if (restriction2 == "NoneO") {
				product_names.push(prods[i].name);
			}
		}
		else if (restriction == "None") {
			if ((restriction2 == "Organic") && (prods[i].organic == true)) {
				product_names.push(prods[i].name);
			}
			else if (restriction2 == "NoneO") {
				product_names.push(prods[i].name);
			}
		}
	}



	return product_names;
}





// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function getPrice(productName) {
	for (let i = 0; i < products.length; i += 1) {
		if (products[i].name === productName) {
			return products[i].price;
		}
	}

}