
function loadJS(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script); 
	return script;
}

$(document).ready(function () {
	loadJS('./static-tab.js');
});
