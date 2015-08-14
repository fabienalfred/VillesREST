getVilles = function(cp, callbackFunction){
	var url = "rest/villes/cp/"+cp;
	console.log("ok3");
	$.getJSON(url, function(data){
		console.log("ok4");
		callbackFunction(data);
	});
};

function showVilles(data){
	console.log("ok5");
	var html = "";
	$.each(data, function(index, ville){
		html += "<option value='" + ville.id
				/*+ "' data-cp='" + ville.codePostal
				+ "' data-latitude='" + ville.latitude
				+ "' data-longitude='" + ville.longitude*/
				+ "'>"
				+ ville.nom + " : " + ville.codePostal
				+ "</option>";
	});
	$("#villes").html(html);
}

$(document).ready(function(){
	console.log("ok1");
	$("#button").click(function(){
		console.log("ok2");
		getVilles($("#cp").val(), showVilles);
	});
})