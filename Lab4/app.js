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
    kontenery[aktualnyindexstrzelajacego].classList.remove('shooter')//usuwanie bierzącej lokacji
    kontenery[aktualnyindexstrzelajacego2].classList.remove('ogien')
    switch(e.keyCode){
        case 37:
            if(aktualnyindexstrzelajacego % szerokosc !== 0 && aktualnyindexstrzelajacego2 % szerokosc !== 0 ) {
                aktualnyindexstrzelajacego -=1
                aktualnyindexstrzelajacego2 -=1
            }
            break
        case 39:
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
        const lewakrawedz = kosmici[0] % szerokosc === 0 
        const prawakrawedz = kosmici[kosmici.length -1] % szerokosc === szerokosc -1
        if((lewakrawedz && kierunek === -1) || (prawakrawedz && kierunek === 1)){
            kierunek = szerokosc
        } 
        else if (kierunek === szerokosc){
            if (lewakrawedz) kierunek = 1 
            else kierunek = -1
        }
        for (let i=0 ; i <=kosmici.length -1;i++){
            kontenery[kosmici[i]].classList.remove('invader')
        }
        for (let i=0 ; i <=kosmici.length -1;i++){
            kosmici[i] += kierunek
        }
        for (let i=0 ; i <=kosmici.length -1;i++){
            if(!ilosczabitychkosmitow.includes(i)){
                kontenery[kosmici[i]].classList.add('invader')
            }
            
        }
        //przegranie gry
        if(kontenery[aktualnyindexstrzelajacego].classList.contains('invader','shooter')){
            wynikdisp.textContent = 'Koniec gry'
            //popraw tu 
            kontenery[aktualnyindexstrzelajacego2].classList.add('boom')
            kontenery[aktualnyindexstrzelajacego].classList.add('boom') 
            clearInterval(idkosmity)
        }
        for (let i=0 ; i <=kosmici.length -1;i++){
            if(kosmici[i]>(kontenery.length - (szerokosc-1))){
                // oddaj event na koniec 
                wynikdisp.textContent = 'Koniec gry'
                clearInterval(idkosmity)
            }
        }
        //wygrana
        if(ilosczabitychkosmitow.length === kosmici.length){
            console.log(ilosczabitychkosmitow.length)
            console.log(kosmici.length)
            wynikdisp.textContent ='Wygrałeś !!!!!!'
            clearInterval(idkosmity)
        }
    }
    idkosmity = setInterval(ruchkosmitow,500)
    //strzelanie
    function strzal(e){
        let laserId
        let aktualneIdLasera = aktualnyindexstrzelajacego
        //róch lasera
        function ruchLasera(){
            kontenery[aktualneIdLasera].classList.remove('laser')
            aktualneIdLasera -= szerokosc
            kontenery[aktualneIdLasera].classList.add('laser')
            if(kontenery[aktualneIdLasera].classList.contains('invader')){
                kontenery[aktualneIdLasera].classList.remove('laser')  
                kontenery[aktualneIdLasera].classList.remove('invader')
                kontenery[aktualneIdLasera].classList.add('boom')

                setTimeout(()=>  kontenery[aktualneIdLasera].classList.remove('boom'),250)
                clearInterval(laserId)

                const zabicikosmici = kosmici.indexOf(aktualneIdLasera)
                ilosczabitychkosmitow.push(zabicikosmici)
                wynik++
                wynikdisp.textContent=wynik
            }

            if(aktualneIdLasera < szerokosc){
                clearInterval(laserId)
                setTimeout(()=>kontenery[aktualneIdLasera].classList.remove('laser'),100)
            }
        }
        switch(e.keyCode)
        {
            case 32:
                laserId = setInterval(ruchLasera ,100)
                break
        }
        /*document.activeElement('keyup',e=>{
            if(e.keyCode === 32){
                laserId = setInterval(ruchLasera ,100)
            }
        })
        */
    }
    document.addEventListener('keyup',strzal)
})