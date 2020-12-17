# Laboratorium nr 6 React - aplikacja nr 1
<br>

# Wygląd apki
<h2></h2>

# Switch / Route / Link 
```python

function App() {
  return (
    <Router>
      <div className="Start">
        
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
          <h2 class="navbar-brand" >Strony</h2>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#"><Link  to="/1">Postrona Pierwsza</Link> <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#"><Link to="/2">Postrona Druga</Link></a>
              <a class="nav-item nav-link" href="#"><Link to="/3">Postrona Trzecia</Link></a>
            </div>
          </div>
        </nav>
        <body>
        <Switch>
          <Route path="/1" exact={true}>
            <Page1 />
          </Route>
          <Route path="/2">
            <Page2 />
          </Route>
          <Route path="/3">
            <Page3 />
          </Route>
          <Route >
            <PageNotFound />
          </Route>
        </Switch>
        </body>
      </div>
    </Router>
  );
}

```



# Pierwsza podstrona  

```python
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));
const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='default' position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            Nowości
          </Typography>

          <Badge badgeContent={4} color="primary">
                <MailIcon />
         </Badge>

         <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>

        </Toolbar>
      </AppBar>
      <body className= "cialo">
          <h1>
            Lorem Ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit arcu, condimentum eget ante nec, rhoncus porttitor neque. Mauris eget urna in sem fringilla posuere nec in turpis. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus velit elit, bibendum non arcu a, molestie mollis ante. Quisque tortor arcu, congue vel ipsum vitae, congue mattis ligula. Donec ultrices in arcu a vestibulum. Cras magna purus, pulvinar quis facilisis id, lacinia sit amet erat. Morbi neque dui, placerat sit amet lorem sed, congue condimentum ex. Sed lacinia accumsan lorem, vel gravida justo egestas a. Mauris posuere sem a mollis pellentesque. Nunc bibendum sapien ut sem laoreet, finibus ullamcorper libero viverra. Aliquam erat volutpat. Aenean ut tincidunt augue, quis iaculis nibh. Suspendisse iaculis non turpis a feugiat.
          </p>
      </body>
    </div>
  );
}
```

![list](/Lab7/moja-aplikacja/Scr/1.PNG "Start")

# Druga podstrona 
```python
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
```
![list](/Lab7/moja-aplikacja/Scr/2.PNG "Start")

![list](/Lab7/moja-aplikacja/Scr/3.PNG "Start")

# Trzecia podstrona 
```python
const Styles = makeStyles({
  root: {
      background: 'linear-gradient(34deg , #AE3A82 , #EA8A53)',
      border: 0 ,
      borderRadius: 15,
      color: 'white',
      padding: '5px 30px'
    
  }
})

function CheckboxEx(){
  const [checked ,setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
      control={
      <Checkbox
        checked={checked}
        icon={<AlarmOnIcon/>}
        checkedIcon={<AlarmOnIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{'aria-label':'secondary checkbox'}}
      />}
      label="CheckBox"
      />
    </div>

  );
}
function PrzyciskStyl(){
  const classes = Styles();
  return <Button className={classes.root}>Testowy przycisk </Button>
}
function Page3() {
  return (
    <div className="strona1">
      <header className="App-header">
       <dialog open>
       <h1 class="Notatki" >Notatki</h1>
         <Grid className="Grid" container spacing={2} justify="center">
          <Grid item>
            <Paper style={{height:155 , width:120  ,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </Paper>
          </Grid>
          <Grid item>
            <Paper style={{height:155 , width:120 ,}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</Paper>
          </Grid>
          <Grid item>
            <Paper style={{height:155 , width:120 ,}}>Nhere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,otka.</Paper>
          </Grid>
         </Grid>
        <PrzyciskStyl/>
        <CheckboxEx/>
         <img src={logo} className="App-logo" alt="logo" />
         <p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
         </p>
         </dialog>
       </header>
      
    </div>
  );
}
```
![list](/Lab7/moja-aplikacja/Scr/4.PNG "Start")



