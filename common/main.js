function RMVersionToCallback(fn) {	
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = fn;
	xhttp.open("GET", "../download/version.txt", true);
	xhttp.send();
}


function RMVersionToElement(id) {	
	RMVersionToCallback(function() {
		if (this.readyState == 4) {
		  if (this.status == 200) {
			  document.getElementById(id).innerText = this.responseText;
			}
		}
	});
}

function RMVersionToHref(id) {
	RMVersionToCallback(function() {
		if (this.readyState == 4) {
		  if (this.status == 200) {
			  document.getElementById(id).href = "../download/radiomod-" + this.responseText + ".zip"
			}
		}
	});
}