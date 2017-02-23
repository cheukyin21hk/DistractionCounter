import React from 'react';
import {render} from 'react-dom';
import CounterBoard from './counterBoard.jsx';

export class App extends React.Component {
	render () {
		return (<CounterBoard></CounterBoard>);
	}
}

render(<App/>, document.getElementById('app'));