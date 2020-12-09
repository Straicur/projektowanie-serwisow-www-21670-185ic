# [Start Bootstrap - Bare](https://startbootstrap.com/templates/bare/)

[Bare](https://startbootstrap.com/templates/bare/) is a bare HTML starter template for [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/). This template features predefined file paths for Bootstrap and jQuery, so you can quickly create Bootstrap websites.

## Preview
=======
## Strona startowa
Główna zmianą na tej karcie jest dodanie zegara który pobiera lokalnie dane przy pomocy getHours() , getMinutes(),getSeconds(), i jest odświeżany co sekundę (setTimeout(1000)).
Dodałem również do textu dwa paragrafy , pierwszy przy pomocy appendChild który dopisuje "AMW" na sam koniec oraz drugi przy pomocy prepend który dodaje "Student" na samym początku . Dodawanie tych elementów podzieliłem na 2 funkcje i wywołałem przy wczytaniu okna (window.onload()).
Po kliknięciu w górną część w której znajduje się nazwisko bg kolor tego kontenera zostanie zmieniony na czerwony .
![list](/Lab2/scr/1.PNG "Start")
>>>>>>> be5efe474b1fc47ed4fc2ac0eed84ca3237fdf02

[![Bare Preview](https://startbootstrap.com/assets/img/screenshots/templates/bare.png)](https://startbootstrap.github.io/startbootstrap-bare/)

**[View Live Preview](https://startbootstrap.github.io/startbootstrap-bare/)**

<<<<<<< HEAD
## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-bare/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-bare.svg)](https://www.npmjs.com/package/startbootstrap-bare)
[![Build Status](https://travis-ci.org/StartBootstrap/startbootstrap-bare.svg?branch=master)](https://travis-ci.org/StartBootstrap/startbootstrap-bare)
[![dependencies Status](https://david-dm.org/StartBootstrap/startbootstrap-bare/status.svg)](https://david-dm.org/StartBootstrap/startbootstrap-bare)
[![devDependencies Status](https://david-dm.org/StartBootstrap/startbootstrap-bare/dev-status.svg)](https://david-dm.org/StartBootstrap/startbootstrap-bare?type=dev)
=======
## Strona z podręcznika
W podręczniku jedyną zmianą jest przypisanie do dwóch zdjęć zdarzenia onclick , po kliknięciu w img zostaje wyświetlone powiadomienie .Strona na samym starcie ma ustawiony bg kolor na szary ale po kliknięciu w obrazek bg kolor zostaje zmieniony na biały . Przy starcie strony zostaje dodany pochylony tekst "Strona z podręcznika" oraz zielony pochylony tekst w środku strony . 
![list](/Lab2/scr/5.PNG "Podrecznik")

## Formularz
W formularzu  zmianą jest zmiana bg color przy wczytaniu strony oraz przy starcie podstrony  szerokość i wysokość zostają ustawione na 200 i 50 px .
![list](/Lab2/scr/6.PNG "Formularz")
## Interakcja
Interakcja jest to podstrona którą stworzyłem na laboratorium . Została podzielona na 2 części . Pierwsza górna część są to 2 selectboxy dodane w htmlu które mają sztywno ustawione opcje , button który jest inicjatorem zdarzenia i inputbox w który można wpisać tekst . Górna część po wybraniu opcji koloru bg , font color z selectów , wpisaniu tekstu i kliknięciu przycisku wyświetli alert z wpisanym tekstem , doda wpisany tekst który będzie pochyły pod inputboxem oraz zmieni kolor tekstu w inputboxie i zmieni kolor bg na wybrany z selectboxa . W dolnej części wyświetlna jest przezentacja czterech zdjęć które płynnie się zmieniają przy pomocy jquery oraz jest możliwość wybrania konkretnego slajdu aby się wyświetlił .
![list](/Lab2/scr/7.PNG "List1")
![list](/Lab2/scr/8.PNG "List2")
![list](/Lab2/scr/9.PNG "List2")
>>>>>>> be5efe474b1fc47ed4fc2ac0eed84ca3237fdf02

## Download and Installation

To begin using this template, choose one of the following options to get started:

* [Download the latest release on Start Bootstrap](https://startbootstrap.com/templates/bare/)
* Install via npm: `npm i startbootstrap-bare`
* Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-bare.git`
* [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-bare)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

After installation, run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `gulpfile.js` to see which tasks are included with the dev environment.

You must have npm and Gulp installed globally on your machine in order to use these features.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-bare/issues) here on GitHub or leave a comment on the [template overview page at Start Bootstrap](https://startbootstrap.com/templates/bare/).

## About

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* <https://startbootstrap.com>
* <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**.

* <http://davidmiller.io>
* <https://twitter.com/davidmillerskt>
* <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2020 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE) license.
