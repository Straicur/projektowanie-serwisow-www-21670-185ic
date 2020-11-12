# Laboratorium 2 JavaScript

<h2>Wszystkie zmiany :</h2>

## Strona startowa
Główna zmianą na tej karcie jest dodanie zegara który pobiera lokalnie dane przy pomocy getHours() , getMinutes(),getSeconds(), i jest odświeżany co sekundę (setTimeout(1000)).
Dodałem również do textu dwa paragrafy , pierwszy przy pomocy appendChild który dopisuje "AMW" na sam koniec oraz drugi przy pomocy prepend który dodaje "Student" na samym początku . Dodawanie tych elementów podzieliłem na 2 funkcje i wywołałem przy wczytaniu okna (window.onload()).
![list](/Lab2/scr/1.PNG "Start")

## List
Modyfikacje w Liście to data która ustawia date przy załadowaniu się karty . Dodałem jeszcze dwa przyciski , pierwszy "Zmien nazwisko" który umożliwia zmiane nazwiska po kliknięciu w przycisk , po tym kliknieciu pojawia się prompt w który można wpisać zamiennik . Drógi przycisk po kliknieciu zmienia fontSize na 30px .
![list](/Lab2/scr/2.PNG "list1")
![list](/Lab2/scr/3.PNG "List2")
![list](/Lab2/scr/4.PNG "List3")


## Strona z podręcznika
W podręczniku jedyną zmianą jest przypisanie do dwóch zdjęć zdarzenia onclick , po kliknięciu w img zostaje wyświetlone powiadomienie .
![list](/Lab2/scr/5.PNG "Podrecznik")

## Formularz
W formularzu jedyną zmianą jest zmiana backgroungd color przy wczytaniu strony .
![list](/Lab2/scr/6.PNG "Formularz")
## Interakcja
Interakcja jest to podstrona którą stworzyłem na laboratorium . Została podzielona na 2 części . Pierwsza górna część są to 2 selectboxy dodane w htmlu które mają sztywno ustawione opcje , button który jest inicjatorem zdarzenia i inputbox w który można wpisać tekst . Górna część po wybraniu opcji koloru bg , font color z selectów , wpisaniu tekstu i kliknięciu przycisku wyświetli alert z wpisanym tekstem , doda wpisany tekst który będzie pochyły pod inputboxem oraz zmieni kolor tekstu w inputboxie i zmieni kolor bg na wybrany z selectboxa . W dolnej części wyświetlna jest przezentacja czterech zdjęć które płynnie się zmieniają przy pomocy jquery oraz jest możliwość wybrania konkretnego slajdu aby się wyświetlił .
![list](/Lab2/scr/7.PNG "List1")
![list](/Lab2/scr/8.PNG "List2")
![list](/Lab2/scr/9.PNG "List2")

