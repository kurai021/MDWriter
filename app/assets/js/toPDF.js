document.getElementById('savePDF').onclick = function(){
	var specialElementHandlers = function (element,renderer) {
		return true;
	}

	var doc = new jsPDF();

	doc.fromHTML($('#output').html(), 15, 15, {
		'width': 170,
		'elementHandlers': specialElementHandlers
	});

	doc.save(document.getElementById('filename').value + '.pdf');
}
