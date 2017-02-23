import React from 'react';


class Counter extends React.Component {
	constructor() {
		super();
	}


	render () {
		return(<div>{this.props.name} <input type="text" name="fname" /><button type="button">Click Me!</button></div>) ;
	}
}


export default Counter;
