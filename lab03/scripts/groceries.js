
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 1.99,
		img: 'media/brocoli.png'
	},
	{
		name: "bread",
		nutsFree: true,
		lactoseFree: true,
		organic: false,
		price: 2.35,
		img: 'media/bread.png'
		
	},
	{
		name: "salmon",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 10.00,
		img: 'media/salmon.png'
	},
	{
		name: "nuts",
		nutsFree: false,
		lactoseFree: true,
		organic: false,
		price: 2.30,
		img: 'media/nuts.png'
	},
	{
		name: "Pesto Sauce",
		nutsFree: false,
		lactoseFree: false,
		organic: false,
		price: 4.25,
		img: 'media/pesto.png'
	},
	{
		name: "Pasta",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 5.35,
		img: 'media/pasta.png'
	},
	{
		name: "Cookies",
		nutsFree: true,
		lactoseFree: false,
		organic: false,
		price: 3.99,
		img: 'media/cookies.png'
	},
	{
		name: "Cashews",
		nutsFree: false,
		lactoseFree: true,
		organic: true,
		price: 5.20,
		img: 'media/cashews.png'
	},
	{
		name: "Almond Milk",
		nutsFree: false,
		lactoseFree: true,
		organic: false,
		price: 6.10,
		img: 'media/almond.png'
	},

	{
		name: "Orange Juice",
		nutsFree: true,
		lactoseFree: true,
		organic: true,
		price: 5.35,
		img: 'media/orange.png'
	},



];


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prod, org, lac, nut) {
	let product_names = [];
	for (let i = 0; i < prod.length; i += 1) {
		if(!org && !lac && !nut){
			product_names.push(prod[i].name);	
		}
		else if((org && !lac && !nut) && prod[i].organic){
			product_names.push(prod[i].name);	
		}
		else if((org && lac && !nut) && prod[i].organic &&  prod[i].lactoseFree){
			product_names.push(prod[i].name);	
		}
		else if((org && !lac && nut) && prod[i].organic &&  prod[i].nutsFree){
			product_names.push(prod[i].name);	
		}
		else if((org && lac && nut) && prod[i].organic &&  prod[i].lactoseFree && prod[i].nutsFree){
			product_names.push(prod[i].name);	
		}
		else if((!org && lac && nut) && prod[i].lactoseFree && prod[i].nutsFree){
			product_names.push(prod[i].name);	
		}
		else if((!org && lac && !nut) && prod[i].lactoseFree){
			product_names.push(prod[i].name);	
		}
		else if((!org && !lac && nut) && prod[i].nutsFree){
			product_names.push(prod[i].name);	
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



function getImage(productName) {
		for (let i = 0; i < products.length; i += 1) {
			if (products[i].name === productName) {
				return products[i].img;
			}
		}

}