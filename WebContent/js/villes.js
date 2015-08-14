getVillesByCp = function(cp, callbackFunction) {
	var url = "rest/villes/cp/" + cp;
	$.getJSON(url, function(data) {
		callbackFunction(data);
	});
};

getVillesByNom = function(nom, callbackFunction) {
	var url = "rest/villes/nom/" + nom;
	$.getJSON(url, function(data) {
		callbackFunction(data);
	});
};


function showVilles(data) {
	var text = "";
	$.each(data, function(index, ville) {
		text += "<option value='" + ville.id 
				+ "' data-cp='" + ville.codePostal
				+ "' data-nom='" + ville.nom 
				+ "' data-latitude='" + ville.latitude 
				+ "' data-longitude='" + ville.longitude
				+ "'>" 
				+ ville.nom + " : " + ville.codePostal 
				+ "</option>";
	});
	$("#results").html(text);
}


function getCoord() {
	console.log($("#results option:selected").attr('data-cp'));
	var lat = $("#results option:selected").attr('data-latitude');
	var lng = $("#results option:selected").attr('data-longitude');
	var nom = $("#results option:selected").attr('data-nom');
	showMap(parseFloat(lat), parseFloat(lng), nom);
}


function showMap(lat, lng, nom) {
	var map = new google.maps.Map(document.getElementById("map"), {
		center : {
			lat : lat,
			lng : lng
		},
		zoom : 8
	});
	var marker = new google.maps.Marker({
		position : {
			lat : lat,
			lng : lng
		},
		map : map,
		title : nom
	});

}

$(window).load(function() {
	showMap(48.86023, 2.34107, "Paris");
})

$(document).ready(function() {
	$("#cp").keyup(function() {
		getVillesByCp($("#cp").val(), showVilles);
	});
//	$("#searchByCp").click(function() {
//		getVillesByCp($("#cp").val(), showVilles);
//	});
	$("#nom").keyup(function() {
		getVillesByNom($("#nom").val(), showVilles);
	});
//	$("#searchByNom").click(function() {
//		getVillesByNom($("#nom").val(), showVilles);
//	});
	$("#showMap").click(function() {
		getCoord();
	})
});