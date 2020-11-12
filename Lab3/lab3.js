var tab = [2,1,1,3,5];
var tabimion=["Ania" , "Marcin" , "Bartek" , "Piotr"];
var string = "Damian mos";
var imie = "Ala";
var miesiac = "Wrzesien";
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
var przedział = "|";
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
window.onload= function(){
kropki(string);
suma(tab);
mix(string);
iloczyn(4,5);
ala(string,miesiac);
ala(imie,"lipiec");
przedziały(str,przedział);
imionaD(tabimion);
imionaM(tabimion);
checkFemale(string);
checkFemale(imie);
countWomanInTable(users);
}

////////////////////////////////////////////////////
function kropki(str){
    var dl;
    var pom="";
    if((typeof(str)=="string")==true)
    {
        dl=str.length;
        for(let i = 0 ; i<dl ; i++)
        {
            pom=pom+".";
        }
        console.info(pom);
    }
    else
    {
        console.info("Nie podałeś stringa");
    }
}
////////////////////////////////////////////////////
function suma(tab){
    var dl;
    var pom=0;
    dl=tab.length;
    for(let i = 0 ; i<dl ; i++)
    {
        pom=pom+tab[i];
    }
    console.info(pom);

}
////////////////////////////////////////////////////
function mix(str){
    var dl;
    var pom ="";
    var tekst = "";
    if((typeof(str)=="string")==true)
    {
        dl=str.length;
        for(let i = 0 ; i<dl ; i++)
        {
            if(i%2==0){    
                pom=str[i].toUpperCase();
                tekst+=pom;    
            }
            else{
                tekst+=str[i];  
            }
        }
    }
    else
    {
        console.info("Nie podałeś stringa");
    }
    console.info(str);
    console.info(tekst);
}
////////////////////////////////////////////////////
function iloczyn(liczba1,liczba2){
    if((typeof(liczba1)=="number")==true && (typeof(liczba2)=="number")==true)
    {
        console.info(liczba1*liczba2);
    }
    else{
       return false;
    }

}
////////////////////////////////////////////////////
function ala(imie,miesiac){
    if((typeof(imie)=="string")==true && (typeof(miesiac)=="string")==true)
    {   
        var pom = miesiac.toLowerCase();
        switch(pom){
            case "grudzien":
            case "styczen":
            case "luty":
                console.log(imie+" jezdzi na sankach");
                break;
            case "marzec":
            case "kwiecien":
            case "maj":
                console.log(imie+" chodzi po kaluzach");
                break;
            case "czerwiec":
            case "lipiec":
            case "sierpien":
                console.log(imie+" sie opala");
                break;
            case "wrzesien":
            case "pazdziernik":
            case "listopad":
                console.log(imie+" zbiera liscie");
                break;
            default:
                console.log(imie+" uczy się JS");
                break;
        }
    }
    else{    
        console.info("Podałeś złe zmienne ");
    }
} 
////////////////////////////////////////////////////
function przedziały(tekst,przedział){
    var tablica =[];
    tablica = tekst.split(przedział);
    //Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka
    tablica.sort();
    tekst = tablica.join(przedział);
    console.info(tekst)
}

////////////////////////////////////////////////////
function imionaD(tab){
    var dl;
    var pom =[];
    console.info(tab);
    dl=tab.length;
    for(let i =0; i<dl;i++)
    {
        pom[i]=tab[i].toUpperCase();
    }
    console.info(pom);
}
////////////////////////////////////////////////////
function imionaM(tab){
    var dl;
    var dlpom;
    var pom = "";
    var tekst = "";
    var tekst2 = "";
    var tabkoncowa =[];
    dl=tab.length;
    for(let i = 0 ; i<dl ; i++)
    {
        pom=tab[i];
        dlpom = pom.length;
        for(let i = 0 ; i<dlpom ; i++)
        {
            if(i%2==0){    
                tekst=pom[i].toUpperCase();
                tekst2+=tekst;    
            }
            else{
                tekst2+=pom[i];  

            }
            
        }
        tabkoncowa[i]=tekst2;
        tekst2="";
    }     
    console.info(tabkoncowa);
}
////////////////////////////////////////////////////
function checkFemale(str){
    var dl;
    var pom = "";
    dl=str.length - 1; 
    pom=str[dl];
    if((typeof(str)=="string")==true)
    {
        if(pom=="a")
        {
            return true;           
        }   
        else
        {
            return false;
        }
    }
    else
    {
        console.log("Nie podałeś Imienia");
    }
}
////////////////////////////////////////////////////
function countWomanInTable(arr){
    var imie = "";
    var kobiety = 0;
    var mezczyzni = 0;
    var dl = arr.length;
    for(let i = 0 ; i<dl ; i++)
    {
        const words = arr[i].split(' ');
        imie=words[0];
        if(checkFemale(imie)==true){
            kobiety++;
        }
        else if(checkFemale(imie)==false){
            mezczyzni++;
        }
        else
        {
            console.log("Błąd"); 
        }
    }
    console.log("Kobiety :"+kobiety);
    console.log("Mężczyźni :"+mezczyzni);
}
////////////////////////////////////////////////////