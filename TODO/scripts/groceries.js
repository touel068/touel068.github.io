	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
        nutsFree:true,
        lactoseFree:true,
		price: 1.99
	},
	{
		name: "bread",
        nutsFree:true,
        lactoseFree:true,
		price: 2.35
	},
	{
		name: "salmon",
        nutsFree:true,
        lactoseFree:true,
		price: 10.00
	},
    {
		name: "nuts",
        nutsFree:false,
        lactoseFree:true,
		price: 2.30
	},
    {
		name: "milk",
        nutsFree:true,
        lactoseFree:false,
		price: 3.99
	},
  
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
        if ((restriction == "NutsFree") && (prods[i].nutsFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}