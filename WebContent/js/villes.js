getVilles = function(cp, callbackFunction){
	var url = "rest/villes/cp/"+cp;
	$.getJSON(url, function(data){
		callbackFunction(data);
	});
};

function showVilles(data){
	console.log("ok");
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
	$("#button").click(function(){
		getVilles($("#cp").val(), showVilles);
	});
})