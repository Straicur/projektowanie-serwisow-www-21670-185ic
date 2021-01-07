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
