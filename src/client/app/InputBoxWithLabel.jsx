import React from 'react';

class InputBoxWithLabel extends React.Component {
  constructor() {
	  super();
	  this.state = {
	     value : ""
    };
    
     this.handleChange = this.handleChange.bind(this);
	}

  render () {
    return (<div>{this.props.name} <input type="text" value={this.state.value} readOnly={this.props.readOnly=='true'} onChange={this.handleChange} /></div>);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getValue(){
    return this.state.value;
  }

}


export default InputBoxWithLabel;