
function loadWords(){
	//chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
	//});
}

function saveWords(){
	//var content = document.getElementById("content");
	
	
	//chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
	//});
}

window.addEventListener("load", loadWords);
document.getElementById('button').addEventListener('click', saveWords);

//todo: save keywords & inject synonyms