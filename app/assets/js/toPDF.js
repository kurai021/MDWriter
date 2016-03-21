document.getElementById('savePDF').onclick = function(){

	var doc = new jsPDF('p','pt','a4');

	specialElementHandlers = {
		// element with id of "bypass" - jQuery style selector
		function (element, renderer) {
			// true = "handled elsewhere, bypass text extraction"
			return true
		}
	};

	margins = {
		top: 20,
		bottom: 20,
		left: 20,
		width: 552
  };

	doc.fromHTML(document.getElementById("output"), margins.left, margins.top, {
		'width': margins.width,
		'elementHandlers': specialElementHandlers
	},


	function(dispose){
		doc.save(document.getElementById("filename").value + '.pdf');
	}, margins);

}
