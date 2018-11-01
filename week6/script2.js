let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};


for (let country of countries){
	let newcountry = document.createElement("option");
	newcountry.textContent = country;
	document.getElementById("countries").appendChild(newcountry);
}

for (let city of cities_by_country["Kazakhstan"]){
	let newcity = document.createElement("option");
	newcity.textContent = city;
	document.getElementById("cities").appendChild(newcity)
}

