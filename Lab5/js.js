let liczbaGodzinPracyWMiesiacu, wiek, rokWyprodukowaniaSamochoduSluzbowego, rokWyprodukowaniaSamochoduPrywatnego;
let markaSamochoduSluzbowego, markaSamochoduPrywatnego, wynagrodzenieNetto, wynagrodzenieBrutto, imie, specjalnosc, title, body;
var jsonNamesCopy, zawod, id, userId, suma;

$(document).ready(
    function() {
        $.getJSON("./test2.json", hello);
    }
);

/*zadanie1*/
function hello(data) {
    imie = data.imie;
    wynagrodzenieBrutto = data.zawod.informatyk.wynagrodzenie.brutto;
    wynagrodzenieNetto = data.zawod.informatyk.wynagrodzenie.netto;
    markaSamochoduPrywatnego = data.pojazd.samochod.prywatny.marka;
    markaSamochoduSluzbowego = data.pojazd.samochod.sluzbowy.marka;
    specjalnosc = data.zawod.informatyk.specjalnosc;

    /*pobranie wszystkich nazw z pliku JSON*/
    jsonNamesCopy = Object.keys(data.zawod);
    zawod = jsonNamesCopy[0];

    liczbaGodzinPracyWMiesiacu = data.zawod.informatyk.liczbaGodzinPracyWMiesiacu;
    wiek = data.wiek;
    rokWyprodukowaniaSamochoduSluzbowego = data.pojazd.samochod.sluzbowy.rokWyprodukowania;
    rokWyprodukowaniaSamochoduPrywatnego = data.pojazd.samochod.prywatny.rokWyprodukowania;

    /*Wywołanie metody oraz implementacja funkcji mnozenia z obiektu JSON dla liczb*/
    multiplyJsonValues(wiek, liczbaGodzinPracyWMiesiacu,
        function(wiek, godzinyPracy) {
            console.log("Wiek to:\n" + wiek + "\n" + "Liczba godzin pracy to:\n" + godzinyPracy + "h" + "\n" +
                "Wynik mnożenia (GodzinyPracy * wiek) to:\n" + godzinyPracy * wiek);
        }
    )

    /*Wywołanie metody oraz implementacja funcji dodania do stringa z obiektu JSON dla liczb*/
    appendJsonStrings(markaSamochoduPrywatnego, specjalnosc,
        function(markaSamochoduPrywatnego, specjalnosc) {
            const text = `${imie} z zawodu to ${zawod} a jego specjalność to ${specjalnosc} i posiada prywatny samochód marki ${markaSamochoduPrywatnego}`;
            console.log(text);
        }
    )
}
//

/*Poczatek zadania 2*/

/*pboranie danych*/
() => {
    count++;
    document.querySelector(".countWheel").value = 'obroty: ' + count;
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(userData => {
        id = userData[0].id;
        userId = userData[0].userId;
        title = userData[0].title;
        body = userData[0].body;
        //console.log(id);
        //console.log(userId);
    })

/*operacje na liczbach z obiektem promise*/
function getArticle(userId) {
    return new Promise((resolve, reject) => {
        if (userId == '1') {
            resolve(sum(userId, id));
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}

/*obiekt promise, wywołujący funkcje która tworzy nowy obiekt*/
function getArticleAndCreateObject(userId) {
    return new Promise((resolve, reject) => {
        if (userId == '1') {
            resolve(createNewObject(title, body));
        } else {
            reject('Nie znaleziono artykułu o takim id.');
        }
    });
}
// async await zad 3
var url = 'https://jsonplaceholder.typicode.com/posts';

async function waitAndAwait(url) {
    let response = await fetch(url);
    if (response.ok) {
        let anotherJsonObject = await response.json();
        let body = anotherJsonObject[0].body;
        let title = anotherJsonObject[0].title;
        let userId = anotherJsonObject[0].userId;
        let id = anotherJsonObject[0].id;
        console.log(addAsync(id, userId));
        console.log(asyncCreateObject(title, body));
    }
}

/*wywoałenie metod*/
setTimeout(() => {
    getArticle(userId).then(data => console.log('pobranie dwoch liczb za pomocą fetch i wykonanie na nich mnożenia\n wynik to:', data));
    getArticle('bzzz').catch(data => console.log("example 1:", data));
    getArticle(userId).finally(() => console.log('koniec operacji na danych'));
    getArticleAndCreateObject(userId).then(data => console.log('pobranie dwoch liczb za pomocą fetch i wykonanie na nich mnożenia\n wynik to:', data));
    getArticleAndCreateObject('bzzz').catch(data => console.log("example 1:", data));
    getArticleAndCreateObject(userId).finally(() => console.log('koniec operacji na danych'));
    waitAndAwait(url);
}, 100);

/*suma liczb*/
function sum(userId, id) {
    return ((userId * id) + 10);
}

/*stworz nowy obiekt*/
function createNewObject(title, body) {
    var someObject = { title: title, body: body };
    return (someObject);
}

/*utworzenie metody z callBackiem dla liczb*/
function multiplyJsonValues(wiek, godzinyPracy, callBack) {
    callBack(wiek, godzinyPracy);
}

/*utworzenie metody z callBackiem dla stringow*/
function appendJsonStrings(markaSamochoduPrywatnego, specjalnosc, callBack) {
    callBack(markaSamochoduPrywatnego, specjalnosc);
}

function addAsync(a, b) {
    return (a + b);
}

function asyncCreateObject(title, body) {
    var someObject = { title: title + 'marik1234', body: body + 'szergowy Bak' };
    return (someObject);
}