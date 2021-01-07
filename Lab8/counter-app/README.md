###


![list](/Lab8/counter-app/Scr/1.PNG "Start")
```
import React, { Component } from "react";

class Counter extends Component {//stworzenie komponentu counter 
  render() {

    return (
      <div className = "koszyk">

        <div className="row">
          <div className="col-md-1">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;

```
###
```
import React, { Component } from "react";
import Counter from "./counter";

/*
        
*/
class Counters extends Component { //stworzenie komponentu counters 
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      counters,
      onRestart,
      onAdd
      
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-success m-2"
          onClick={onReset}
          disabled={counters.length === 0 ? "disabled" : ""}
        >
          <i className="fa fa-refresh " aria-hidden="true" />
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={onRestart}
          disabled={counters.length !== 0 ? "disabled" : ""}
        >
          <i className="fa fa-recycle " aria-hidden="true" />
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={onAdd}
          disabled={counters.length >=10 ? "disabled" : ""}
        >
          <i className="fa fa-plus" aria-hidden="true" />
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
```
###
```
import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
      Zamówienia
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span className="badge badge-pill badge-success m-2" style={{ width: 50 }}>
          {totalCounters}
        </span>
        
      </div>
    </nav>
  );
};

export default NavBar;

```
###
```
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0  },
      { id: 2, value: 0  },
      { id: 3, value: 0  },
      { id: 4, value: 0  }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    }); 
    this.setState({ counters });
  };
  handleRestart = () => {
    window.location.reload();
  };
  refresh = () => {
    const counters = this.state.counters.map(c => {
      return c;
    }); 
    this.setState({ counters });
  };
  handleAdd = () => {
    const cid=this.state.counters.length + 1 ;
    this.state.counters.push({id: cid, value: 0});
    this.refresh();
  };
  
  render() {
    return (
      <div className = "tlo">
        <NavBar
            totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className = "kontener">
          <main className="container">
            <Counters
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onRestart={this.handleRestart}
              onAdd={this.handleAdd}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
```
