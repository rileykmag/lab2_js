//calculates the total of the pastries being purhased. gives error if quantity is negative
function update() {
	var pastries = document.getElementsByClassName("quant");
	var costs = document.getElementsByClassName("cost");
	var total_pastries = 0;
	var totalcost = 0;

	for (var i = 0; i < pastries.length; i++) {
		var quantity = parseFloat(pastries[i].value) || 0;
		if (quantity < 0) {
			console.log("Negitive Value")
			//change red
			pastries[i].style.backgroundColor = '#ffcccc';
			
		}
		else if(quantity > 0){
			totalcost += parseFloat(costs[i].innerHTML) * quantity;
			total_pastries += quantity;
			// change back to default background color
			pastries[i].style.backgroundColor = "";
		}
		else{ //quantity = 0, throw error
			//change red
			pastries[i].style.backgroundColor = '#ffcccc';

		}
	}


	document.getElementById("quantTotal").innerHTML = total_pastries;
	document.getElementById("totalCost").innerHTML = totalcost;
}