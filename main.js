var nameEl, basicInfoEl, brothelEl;
var newAllButton, newNameButton, newHistoryButton;

var langIS = true;

document.addEventListener("DOMContentLoaded", function(){
	
	newAllButton = document.getElementById("newAll");
	newAllButton.addEventListener("click", newAll);

	newNameButton = document.getElementById("newName");
	newNameButton.addEventListener("click", newName);

	newHistoryButton = document.getElementById("newHistory");
	newHistoryButton.addEventListener("click", newHistory);

	nameEl = document.getElementById("name");
	basicInfoEl = document.getElementById("basicInfo");
	brothelEl = document.getElementById("brothel");

});

function arrayRandom(arr){
	var index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function newAll(){
	newName();
	newHistory();

}


function newName(){

	langIS = Math.random() > 0.6;


 	var name = "";
 	if (Math.random() > 0.8){
 		name += arrayRandom(namePrefixes) + " ";
 	}

 	var firstName = "";
 	while(firstName.length < 2){
 		if (langIS){
 			firstName = Math.random() > 0.5 ? arrayRandom(maleNamesIS) : arrayRandom(femaleNamesIS);
 		} else {
 			firstName = Math.random() > 0.5 ? arrayRandom(maleNamesEN) : arrayRandom(femaleNamesEN);
 		}
 		
 	}
 	name += firstName + " ";

 	if(Math.random() > 0.9){
 		name += arrayRandom(alphabet) + ". ";
 	}

 	var lastName = "";
 	while(lastName.length < 2){
 		if (langIS){
 			lastName = Math.random() > 0.5 ? arrayRandom(maleNamesIS) : arrayRandom(femaleNamesIS);
 		} else {
 			lastName = arrayRandom(lastNamesEN);
 		}
 	}
 	if (langIS){
 		lastName += "s";	
 	}
 	

 	name += lastName;

 	nameEl.innerHTML = name;


}

function newHistory(){

	var history = "";

	if (Math.random() > 0.6){

		if (langIS){
			history += "Native of Iceland. ";
		} else {
			if (Math.random() > 0.05){
				history += "Grew up in " + arrayRandom(countries) + ". ";
			} else {
				history += "Stateless. ";
			}
		}

	}

	if (Math.random() > 0.3){

		history += "Your star sign is " + arrayRandom(starSigns) + ". ";

	}

	if (Math.random() > 0.2){

		history += "You are a " + arrayRandom(occupations).toLowerCase() + " by day. ";
	}

	

	


	basicInfoEl.innerHTML = history;
}
