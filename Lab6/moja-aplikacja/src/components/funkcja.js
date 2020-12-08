import React from 'react'
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
                <h1 className = "tytul">{this.state.title}</h1>
                <Names test={this.state.showNames}/>
                <button type="button" className="btn btn-dark przycisk" onClick={changeTitle}>Zmień tytuł</button>
                <button type="button" className="btn btn-dark przycisk" onClick={()=>this.toggleNames()}>Imiona</button>
            </div>
            </div>
        )    
    }
}
export default HeadLine;