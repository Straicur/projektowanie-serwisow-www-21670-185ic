import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {FormControlLabel, Checkbox,Paper, Grid,  Button } from "@material-ui/core"
import './App.css';
import HeadLine from './components/funkcja';
import Tab1 from './components/funkcja2';
import logo from './logo.svg';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import AlarmOnIcon from '@material-ui/icons/AlarmOn'; 
import { makeStyles } from '@material-ui/core/styles'
const Styles = makeStyles({
  root: {
      background: 'linear-gradient(34deg , #AE3A82 , #EA8A53)',
      border: 0 ,
      borderRadius: 15,
      color: 'white',
      padding: '5px 30px'
    
  }
})

function Page1() {
  return (
  <div>
    <Tab1 />
  </div>
    );
}

function Page2() {
  return (
  <div>
    <HeadLine />
  </div>
  );
}

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
function PageNotFound() {
  return <h2>404 !</h2>;
}
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

export default App;
