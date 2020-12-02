window.onload = function(){
odliczanieh();

	//zad 5
	let body,title,userId,id;
	let url_posts_2 = 'https://jsonplaceholder.typicode.com/posts/2';
	axios.get(url_posts_2)
	.then(function (response) {
	body = response.data.body;
	title = response.data.title;
	userId = response.data.userId;
	id = response.data.id;	
	console.log(addAxios(id, userId));
	console.log(addAxiosObj(title, body));
	})
	.catch(function (error) {
		console.log("axios posts 2: ", error);
	})
	.then(function () {
		console.log("Koniec axios");
	});

};

function odliczanieh()
	{
		var dzisiaj = new Date();
	
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		document.getElementById("zegarek").innerHTML = godzina+":"+minuta+":"+sekunda;
		 setTimeout("odliczanieh()",1000);
	}
	// Zad  1 
	let isLoading = true;
	let nazwa ,region , callingCodes ;
	let id,userId,title,body ;
 
	var person = {
		"name":"Damian",
		"age":22,
		"vehicles": {
		  "car":"Golf",
		  "bike":"ktm-duke",
		  "airlines":{
			  "seat":30,
			  "British airways" : "Brt707"
		  }
		}
	}
	const licz1 = person.age;
	const licz2 = person.vehicles.airlines.seat;
	function randomBetween(liczba1, liczba2, fn) {
	const nr = liczba1 + liczba2;
	
	fn(nr);
	}

	randomBetween(licz1,licz2, function(res) {
		console.log("Dodawanie " + res);
	});
	

	
	function myF(fn) {
	const text = person.name
	fn(text); 
	}

	myF(function(a) {
	const text1 = person.vehicles.car
	const text2 = ` ma takie auto : ${text1}`
	console.log(a + text2) 
	})
	// Zad 2 
	

	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(userData => {
		id = userData[0].id;
		userId = userData[0].userId;
		title = userData[0].title;
		body = userData[0].body;
	})
	.catch(function(error) { console.error(error)})
	.finally(function(){isLoading = false; console.log("Ładuje się ?" + isLoading )})
	
	fetch("https://restcountries.eu/rest/v2/name/Poland") 
	.then(response => response.json())
	.then(response => {
		nazwa = response[0].name;
		region = response[0].region;
		callingCodes = response[0].callingCodes;
		//console.log("Info about country: ", response);

	})
	.catch(function(error) { console.error(error)})
	.finally(function(){isLoading = false; console.log("Ładuje się ?" + isLoading )})
	// Objetnice 
	function getArticle(userId) {
	  return new Promise((resolve, reject) => {
		  if (userId == 1) {
			  resolve(sum(userId, id));
		  } else {
			  reject('Nie znaleziono artykułu o takim id.');
		  }
	  });
	}

	function getArticleAndCreateObject(callingCodes) {
		return new Promise((resolve, reject) => {
			if (callingCodes == "48") {
				resolve(nowyObjekt(nazwa, region));
			} else {
				reject('Nie znaleziono artykułu o takim id.');
			}
		});
	}



	// async await zad 3
	var url = 'https://jsonplaceholder.typicode.com/posts/4';

	async function asyncAwait(url) {
		let response = await fetch(url);
		if (response.ok) {
			anotherJsonObject = await response.json();
			body = anotherJsonObject.body;
			title = anotherJsonObject.title;
			userId = anotherJsonObject.userId;
			id = anotherJsonObject.id;
			console.log(addAsync(id, userId));
			console.log(addAsyncObj(title, body));
		}
	}
	//Ajax zad 4
	let url_posts_5 = 'https://jsonplaceholder.typicode.com/posts/5';
	let xhr = new XMLHttpRequest();

	xhr.open('GET', url_posts_5);

	xhr.responseType = 'json';
	xhr.send();

	xhr.onload = function() {
		let responseObj = xhr.response;
		body = responseObj.body;
		title = responseObj.title;
		userId = responseObj.userId;
		id = responseObj.id;	
	  	console.log(addAjax(id, userId));
		console.log(addAjaxObj(title, body));
	};
	xhr.onerror = function() {
	  console.log("Error"); 
	};

	setTimeout(() => {
	  getArticle(userId).then(data => console.log('Fetch :pobranie dwóch liczb i działanie na nich\n wynik to:', data));
	  getArticle('bzzz').catch(data => console.log("Przykład błędny:", data));
	  getArticle(userId).finally(() => console.log('koniec operacji'));
	  getArticleAndCreateObject(callingCodes).then(data => console.log('Fetch :pobranie dwóch zasobów i stworzenie nowego objektu \n wynik to:', data));
	  getArticleAndCreateObject('bzzz').catch(data => console.log("Przykład błędny:", data));
	  getArticleAndCreateObject(callingCodes).finally(() => console.log('Koniec'));
	  asyncAwait(url);
	  }, 100);            
		//zad 2
	function sum(userId, id) {
		console.log("Pierwsza liczba : "+ userId+" Druga liczba : " +id )	
	  return ((userId - id) + 10);
	}

	function nowyObjekt(title, body) {
		var objekt = { nazwa: title, region: body };
		return (objekt);
	}
		//zad 3
	function addAsync(userid, id) {
		console.log("(useId + id) * 3 : "+userid+" " +id)	
		return ((userid+id)*3);
	}
		
	function addAsyncObj(title, body) {
		var someObject = { title: title  , body: body  };
	 	return (someObject);
	}
		//zad 4
	function addAjax(userid, id){
		console.log("(useId + id) * 4 : "+userid+" " +id)	
		return ((userid+id)*4);
	}
	function addAjaxObj(title, body){
		var someObject = { title: title  , body: body  };
	 	return (someObject);
	}
		//zad 6
	function addAxios(userid, id){
		console.log("(useId + id) * 2 : "+userid+" " +id)	
		return ((userid+id)*2);
	}
	function addAxiosObj(title, body){
		var someObject = { title: title  , body: body  };
	 	return (someObject);
	}

	  
   
