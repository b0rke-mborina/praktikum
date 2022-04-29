//"I have been, good. My best friend and I have fisherman and have fish."
let phrase = [
	"I",
	"have",
	"been",
	",",
	"good",
	".",
	"My",
	"best",
	"friend",
	"and",
	"I",
	"have",
	"fisherman",
	"and",
	"have",
	"fish",
	".",
 ];

 const stopWords = [".", ",", "!", "?", ";"];
 
 var indexGram = phrase.reduce(function (obj, word, currentIndex) {
	if (!obj["stopwords"]) {
	  obj["stopwords"] = [];
	}
	if (!obj[word] && !stopWords.includes(word)) {
	  obj[word] = [currentIndex];
	} else {
	  if (stopWords.includes(word)) {
		 obj["stopwords"].push(currentIndex);
	  } else obj[word].push(currentIndex);
	}
	return obj;
 }, {});
 console.log(indexGram);
 
 //findSuggestions("I have");
 
 function findSuggestions(searchTerm) {
	const splits = searchTerm.split(" ");
	console.log(splits);
	//1. naći lokaciju I
	//2. naći lokaciju have
	//3. filtrirati samo kombinacije gdje su te dvije lokacije jedna za drugom
	//4. pronaći riječi koje se nalaze na indexu have + 1
 }

 module.exports = findSuggestions;