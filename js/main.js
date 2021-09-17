

document.getElementById("wordsearch-button").onclick = function () {

	let word = document.getElementById("word-input").value;

	fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
		.then(response => response.json())
		.then(data =>{

			console.log(data);
			document.getElementById("definition-input").value = data['0'].meanings['0'].definitions['0'].definition;
			document.getElementById("PartOfSpeech-input").value = data['0'].meanings['0'].partOfSpeech;
			document.getElementById("example-input").value = data['0'].meanings['0'].definitions['0'].example;
			

		});
}

document.getElementById("wordclean-button").onclick = function (){

	document.getElementById("word-input").value = "";
	document.getElementById("definition-input").value = "";
	document.getElementById("PartOfSpeech-input").value = "";
	document.getElementById("definition-input").value = "";
}
		
	
	