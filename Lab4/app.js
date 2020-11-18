
var button1 = document.createElement("button")
button1.innerText = "Zapisz wynik"
button1.className = "button1"
button1.disabled = true
var button2 = document.createElement("button")
button2.innerText = "Zacznij od nowa"
button2.className = "button2"
var button3 = document.createElement("button")
button3.innerText = "Wyższy poziom"
button3.className = "button2"


document.addEventListener('DOMContentLoaded',()=>{
    const kontenery = document.querySelectorAll('.grid div')
    const wynikdisp = document.querySelector('#result')
    let szerokosc =15
    let aktualnyindexstrzelajacego = 202
    let aktualnyindexstrzelajacego2 = 217
    let aktualnyindexkosmity = 0
    let ilosczabitychkosmitow = []
    let wynik = 0
    let kierunek = 1
    let idkosmity 
    var wygrana = 0 

    const dzisiajstart = new Date()
    var minutastart = dzisiajstart.getMinutes()
    var sekundastart = dzisiajstart.getSeconds()
    console.info(minutastart)
    console.info(sekundastart)
    var czasstring
    var minutakoniec
    var sekundakoniec
    //definiowanie kosmitów
    //indeksy kosmitów
    const kosmici =[
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]


    //rysowanie kosmitów
    kosmici.forEach(invader => kontenery[aktualnyindexkosmity +invader].classList.add('invader'))
    //rysowanie strzelaca
    kontenery[aktualnyindexstrzelajacego].classList.add('shooter')
    kontenery[aktualnyindexstrzelajacego2].classList.add('ogien')
    //ruch strzelaca (tylko na boki)
    function ruchstrzelaca(e){
    kontenery[aktualnyindexstrzelajacego].classList.remove('shooter')
    //usuwanie bierzącej lokacji
    kontenery[aktualnyindexstrzelajacego2].classList.remove('ogien')
    switch(e.keyCode){
        case 37:
            //lewo
            if(aktualnyindexstrzelajacego % szerokosc !== 0 && aktualnyindexstrzelajacego2 % szerokosc !== 0 ) {
                aktualnyindexstrzelajacego -=1
                aktualnyindexstrzelajacego2 -=1
            }
            break
        case 39:
            //prawo
            if(aktualnyindexstrzelajacego % szerokosc < szerokosc-1 && aktualnyindexstrzelajacego2 % szerokosc < szerokosc-1){
                aktualnyindexstrzelajacego +=1   
                aktualnyindexstrzelajacego2 +=1   
            }
            break
    }
        // przypisanie do nowej lokacji
        kontenery[aktualnyindexstrzelajacego].classList.add('shooter')
        kontenery[aktualnyindexstrzelajacego2].classList.add('ogien')
    }
    document.addEventListener('keydown',ruchstrzelaca)
    //ruch komitów
    function ruchkosmitow(){
        const lewakrawedz = kosmici[0] % szerokosc === 0 //pierszy kosmita
        const prawakrawedz = kosmici[kosmici.length -1] % szerokosc === szerokosc -1 //ostatni kosmita
        if((lewakrawedz && kierunek === -1) || (prawakrawedz && kierunek === 1)){
            kierunek = szerokosc
            //przeskok w dół
            console.info("przeskok")
        } 
        //Jeżeli index to już np 15 to przeskok
        else if (kierunek === szerokosc){
            if (lewakrawedz) kierunek = 1 
            else kierunek = -1
            console.info("przeskok2")
        }
        //usuwanie kosmitów
        for (let i=0 ; i <=kosmici.length -1;i++){
            kontenery[kosmici[i]].classList.remove('invader')
        }
        for (let i=0 ; i <=kosmici.length -1;i++){
            kosmici[i] += kierunek //przypisanie kierunku do każdego kosmity

        }
        //przypisanie nowej lokacji dla kosmity
        for (let i=0 ; i <=kosmici.length -1;i++){
            if(!ilosczabitychkosmitow.includes(i)){
                //argument który nie pozwoli programowi dodawać nowych kosmitów jeżeli zostali zestrzeleni
                kontenery[kosmici[i]].classList.add('invader')
            }
        }
        //przegranie gry jeżeli kosmita dotyka strzelca
        if(kontenery[aktualnyindexstrzelajacego].classList.contains('invader','shooter')){
            wynikdisp.textContent = 'Koniec gry !!'
            kontenery[aktualnyindexstrzelajacego2].classList.remove('ogien')
            kontenery[aktualnyindexstrzelajacego2].classList.add('boom')
            kontenery[aktualnyindexstrzelajacego].classList.add('boom') 
            clearInterval(idkosmity)
        }
        //przegranie gry jeżeli jakis kosmita jest w ostatnich 15 divach gry
        for (let i=0 ; i <=kosmici.length -1;i++){
            if(kosmici[i]>(kontenery.length - (szerokosc-1))){
                kontenery[aktualnyindexstrzelajacego2].classList.remove('ogien')
                kontenery[aktualnyindexstrzelajacego2].classList.add('boom')
                kontenery[aktualnyindexstrzelajacego].classList.add('boom') 
                wynikdisp.textContent = 'Koniec gry !!'
                clearInterval(idkosmity)
            }
        }
        //wygrana
        if(ilosczabitychkosmitow.length === kosmici.length){
            //Jeżeli ilosc zabotych kosmitów jest taka sama jak ilosc kosmitów stworzonych na poczatku (wygrana)
            console.log(ilosczabitychkosmitow.length)
            console.log(kosmici.length)
            wynikdisp.textContent ='Wygrałeś !!!!!!'
            wygrana = 1
            button1.disabled = false
            const dzisiajkoniec = new Date()
            minutakoniec = dzisiajkoniec.getMinutes()
            sekundakoniec = dzisiajkoniec.getSeconds()
            
            var czas = new Date(Math.abs(dzisiajstart.getTime() - dzisiajkoniec.getTime()))
            czasstring=(czas.getMinutes()+"min "+czas.getSeconds()+"sek")
            
            clearInterval(idkosmity)
        }
    }

    idkosmity = setInterval(ruchkosmitow,400)
    //strzelanie
    function strzal(e){
        let laserId
        let aktualneIdLasera = aktualnyindexstrzelajacego
        //róch lasera w strone kosmitów
        function ruchLasera(){
            kontenery[aktualneIdLasera].classList.remove('laser')
            aktualneIdLasera -= szerokosc
            kontenery[aktualneIdLasera].classList.add('laser')
            if(kontenery[aktualneIdLasera].classList.contains('invader')){
                //jeżeli aktulnyindex lasera jest taki sam jak kosmity to usuwamy kosmite i laser i dodajemy boom
                kontenery[aktualneIdLasera].classList.remove('laser')  
                kontenery[aktualneIdLasera].classList.remove('invader')
                kontenery[aktualneIdLasera].classList.add('boom')

                setTimeout(()=> kontenery[aktualneIdLasera].classList.remove('boom'),150)//usuniecie booma po 150 ms
                
                clearInterval(laserId)

                const zabicikosmici = kosmici.indexOf(aktualneIdLasera)
                ilosczabitychkosmitow.push(zabicikosmici)
                wynik++
                wynikdisp.textContent=wynik
            }
            //jeżeli laser nie jest już w 15 divach to go usuwamy
            if(aktualneIdLasera < szerokosc){
                clearInterval(laserId)
                setTimeout(()=>kontenery[aktualneIdLasera].classList.remove('laser'),10)
            }
        }
        switch(e.keyCode)
        {
            case 32:
                laserId = setInterval(ruchLasera ,30)//interwał strzelania (50 to szykosc)
                break
        }
        /*document.activeElement('keyup',e=>{
            if(e.keyCode === 32){
                laserId = setInterval(ruchLasera ,100)
            }
        })
        */
    }
    // dodawanie danych do tablicy
    function addRow(tableclass,nick,wynik,czas) {
        let tableRef = document.querySelector(tableclass);
        let newRow = tableRef.insertRow(-1)
        let newCell = newRow.insertCell(0)
        let newCel2 = newRow.insertCell(1)
        let newCel3 = newRow.insertCell(2)
        let newCel4 = newRow.insertCell(3)
        newCell.className = "wiersz"
        newCel2.className = "wiersz"
        newCel3.className = "wiersz"
        newCel4.className = "wiersz"
        let newText1 = document.createTextNode(nick)
        let newText2 = document.createTextNode(wynik)
        let newText3 = document.createTextNode(czas)
        let newText4 = document.createTextNode('0')
        newCell.appendChild(newText1)
        newCel2.appendChild(newText2)
        newCel3.appendChild(newText3)
        newCel4.appendChild(newText4)
      }


    document.addEventListener('keyup',strzal)

    button1.onclick = function(){
        if(wygrana == 1 ){
            if(wygrana == 1 ){
                var nick  = window.prompt("Podaj nick:")
                addRow('.tablebody',nick,wynik,czasstring)
            }
        }
    };
    button2.onclick = function(){
        clearInterval(idkosmity)
        kosmici.forEach(invader => kontenery[aktualnyindexkosmity +invader].classList.remove('invader'))
        kosmici.forEach(invader => kontenery[aktualnyindexkosmity +invader].classList.add('invader'))
    };
    button3.onclick = function(){
        
    };
   
    document.querySelector(".przyciski").appendChild(button1)
    document.querySelector(".przyciski").appendChild(button2)
    document.querySelector(".przyciski").appendChild(button3)

})



