document.addEventListener('DOMContentLoaded',()=>{
    const kontenery = document.querySelectorAll('.grid div')
    const wynikdisp = document.querySelector('#result')
    let width =15
    let aktualnyindexstrzelajacego = 202
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
    kosmici.forEach(kosmici => kontenery[aktualnyindexkosmity +kosmici].classList.add('invader'))
})