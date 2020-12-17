import React from 'react'
import {Container, Button ,ButtonGroup } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'; 
//komponent funkcji
const Names = props => {
    const names = ['Damian', 'Marcin', 'Mati', 'Papryk']
    // wykorzystanie funkcji map która przekształca tablicę do wytświetlenia imion w postaci listy nienumerowanej
    // dodawanie klucza do każdej wartość aby view wiedział która pozycja jest którym elementem 
    const namesList = names.map(name => <li key={name}>{name}</li>)  //pętla 
    return (
        //zwrócenie listy a w przeciwnym razie ma  wypisać Brak imion 
        // przekazanie propsem state
        <div>
            {props.test ? <ul>{namesList}</ul> : 'Brak Imion'} 
        </div>
    )
} 
//klasa która jest komponentem 
class HeadLine extends React.Component {
    // Przechowywanie tytułu i warotści boolean w stanie
    state={
        title: 'ReactJS' ,
        showNames: true
    } 
    toggleNames(){
        //zmiana booleana na odwrotność po kliknięciu buttona
        this.setState({ showNames : !this.state.showNames })
    }
    //renderowanie / zwracanie 
    render(){
        //funkcja zmieniająca tytuł przy pomocy zmiany stanu tytułu 
        const changeTitle = () => this.setState({ title: 'Hello World' })
        //JSX
        // test  to zmienna do props. 
        //Przekazujemy do niej boolean który gdy jest ustawiona na true zostanie wyświetlona lista imiona
        // a jeżeli na false zostanie wyświetlony 'Brak Imion'
        return (
        
            <div className="pojemnikgl">
                <div className="pojemnik">
                <Container fixed maxWidth="md" className="Kontener">
                    <h1 className = "tytul">{this.state.title}</h1>
                    <Names test={this.state.showNames}/>
                    <ButtonGroup color="primary" aria-label="outlined secondary button group">
                    <Button  startIcon={<AcUnitIcon />} className = "przycisk"  onClick={changeTitle}> Zmień tytuł </Button>
                    <Button  startIcon={<AcUnitIcon />} className = "przycisk" onClick={()=>this.toggleNames()}> Imiona </Button>
                    </ButtonGroup>
                </Container>
                </div>
            </div>
        
        )    
    }
}
export default HeadLine;