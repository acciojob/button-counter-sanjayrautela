


import React, { Component } from "react";


class counter extends Component {
    constructor(props){
        super(props);
        this.state = {count:0};
    }
  render() {
    const incrementCount = () =>{
        const curr = this.state.count;
        this.setState({count:1 + curr})
    }



    return (
      <div>
        <p>Button clicked {this.state.count} times</p>
        <button onClick={incrementCount}>Click me</button>
        
      </div>
    )
  }
}

export default counter;
