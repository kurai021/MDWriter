var markdownpdf = require("markdown-pdf");

document.getElementById('savePDF').onclick = function(){

	//var md = codemirror.getValue();
	var md = document.getElementById('output').innerHTML;
	var output;

	var pdfopt = {
    remarkable: {
			html: true,
			breaks: true,
			syntax: [ 'footnote', 'sup', 'sub' ]
		}
	}

	if(navigator.appVersion.indexOf("Win")!=-1){
		output = "%UserProfile%/Downloads"+document.getElementById("filename").value+".pdf";
	}
	if(navigator.appVersion.indexOf("Mac")!=-1){
		output = "~/Downloads/"+document.getElementById("filename").value+".pdf";
	}
	if(navigator.appVersion.indexOf("Linux")!=-1){
		output = "~/Downloads/"+document.getElementById("filename").value+".pdf";
	}

	markdownpdf(pdfopt).from.string(md).to(output, function(){

		var options = {
			body: "PDF created in "+output
		};

		var pdfN = new Notification('MDWriter',options);
		setTimeout(function() {pdfN.close();}, 5000);

		// your code goes here...
		console.log('PDF created!');

	});

}
