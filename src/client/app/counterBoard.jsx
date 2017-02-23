import React from 'react';
import Counter from './counter.jsx';
import InputBoxWithLabel  from './InputBoxWithLabel.jsx';
class CounterBoard extends React.Component {
  constructor() {
	  super();
	  this.state = {
	    noOfCounter: 0,
	    countersName:[]
	  };
	}

  IncrementCounter(){
    this.setState((prevState) => {
      return { noOfCounter: prevState.noOfCounter + 1 }
    });
  }


  render () {
  	var counters=[];
  	for(var i = 0; i < this.state.noOfCounter;i++){
  		counters.push(<Counter/>);
  	}
    return(
  	<div>
  	<span>{counters}</span>
  	  	<span><InputBoxWithLabel ref="distractionName" name="Distraction Name" /><button type='button' onClick={() => this.addCounter()}>Add Counter</button></span>
	</div>
    );
  }

  addCounter(){
  	this.IncrementCounter();
  	this.state.countersName.push(this.refs.distractionName.getValue());
  	console.log(this.refs.distractionName.getValue());
  	console.log(this.refs.distractionName.getValue());
  		
  }

}


export default CounterBoard;