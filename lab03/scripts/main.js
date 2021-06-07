
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
function populateProducts(lst){
	var org = document.getElementById('organic').checked;
	var nut = document.getElementById('nuts').checked;
	var lac = document.getElementById('lactose').checked;
	var list = document.getElementById(lst);
	list.innerHTML="";
	products.sort((product1, product2) => (product1.price > product2.price ? 1 : -1));
	var optionArray = restrictListProducts(products, org,lac,nut);
	for (i = 0; i < optionArray.length; i++){
		var productName = optionArray[i];
		var price = getPrice(productName);
		var img = getImage(productName);


		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		//list.appendChild(checkbox);



		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName+ ' '+price + "$";
		label.appendChild(document.createTextNode(productName+ ' '+price+"$"));
		//list.appendChild(label);

		//var image = document.createElement('img');
		//image.src=img;
	
		//list.appendChild(image);
		// create a breakline node and add in HTML DOM
		//list.appendChild(document.createElement("br"));   

		//Create cards
		var card = document.createElement('card');
		card.className="card";
		var cnt = document.createElement('div')
		cnt.className="cnt";
		var finalImg = document.createElement('img')
		finalImg.className="cImage";
		finalImg.src=img;
		//	cnt.appendChild(label);
		card.appendChild(finalImg);
		var h4 = document.createElement('h4');
		h4.textContent=productName+' ' + price + "$";
		cnt.appendChild(h4);
		cnt.appendChild(checkbox);
	

		card.appendChild(cnt);
		list.appendChild(card);
		


		
	}

}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML='';
	
	// build list of selected item
	var para = document.createElement("P");
	
	para.appendChild(document.createElement("br"));

	para.className="para";

	var cardH = document.createElement("div");
	cardH.className="cartH";
	var h2 = document.createElement("h2");
	h2.textContent="Cart";
	cardH.appendChild(h2); 

	var cardI = document.createElement("div");
	cardI.className="cartI";
	var cardF = document.createElement("div");
	cardF.className="cartF"


	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(cardH);
	cardI.appendChild(para);
	c.appendChild(cardI);

	var total = document.createTextNode("Total:" + getTotalPrice(chosenProducts)+"$");
	total.className="total";

	cardF.appendChild(total);
	c.appendChild(cardF);

	
		
}
