// OPENS MODAL 

document.getElementById("delivery").addEventListener("click",
	function() {
		document.querySelector("#modal").style.display = "flex";
	});

document.getElementById("pickup").addEventListener("click",
	function() {
		document.querySelector("#modal").style.display = "flex";
	});

// CLOSES MODAL 

document.querySelector(".close").addEventListener("click",
	function() {
		document.querySelector("#modal").style.display = "none";
	});

// GET RECEIPT

function getReceipt() {
	var text1 = "";
	var text2 ="";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
		text2 = text2 + "$"+sizeTotal+"<br>";
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
		text2 = text2+ "$"+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
		text2 = text2+ "$"+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
		text2 = text2+ "$"+sizeTotal+"<br>";
	}
	runningTotal = sizeTotal;

	getCrust(runningTotal,text1, text2); 
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			var selectedCrust = crustArray[j].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	text2 = text2 + "$"+crustTotal + "<br>";

	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			var selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce + "<br>";
		}
	}	

	runningTotal = (runningTotal+sauceTotal);
	text2 = text2 + "$"+0 + "<br>";

	getCheese(runningTotal,text1,text2);

};


function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			var selectedCheese = cheeseArray[j].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	text2 = text2 + "$"+cheeseTotal + "<br>";

	getMeat(runningTotal,text1,text2);
};
function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;

	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 + "$"+ 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 + "$"+ 1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 +"$"+ 1 + "<br>";
				meatCount = meatCount - 1;
			}
		}	

	getVeg(runningTotal,text1,text2);
};	

function getVeg(runningTotal,text1,text2) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeg.push(vegArray[j].value);
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount >= 2) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	for (var j = 0; j < selectedVeg.length; j++) {
			text1 = text1+selectedVeg[j]+"<br>";
			if (vegCount <= 1) {
				text2 = text2 +"$"+ 0 + "<br>";
				vegCount = vegCount - 1;
			} else if (vegCount == 2) {
				text2 = text2 + "$"+1 + "<br>";
				vegCount = vegCount - 1;
			} else {
				text2 = text2 + "$"+1 + "<br>";
				vegCount = vegCount - 1;
			}
		}		

	console.log("subtotal: $"+runningTotal+".00");
	document.getElementById("cart").style.display = "flex";
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("showText2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML="</h2><strong>$"+runningTotal+".00"+"</strong></h2>";
	
};

// CANCELS ORDER

function clearAll() {
	document.getElementById("frMenu").reset();
	document.getElementById("cart").style.display = "none";
};