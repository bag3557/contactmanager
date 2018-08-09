import React, { Component } from 'react'

class Test extends Component {
  // componentWillMount(){
  //   console.log("Component Will Mount...");
  // }
  // componentDidMount() {
  //   console.log("Component Did Mount...");
  // }
  // componentWillReceiveProps(nextProps, nextState){
  //   console.log("Component Receive Props");    
  // }
  // componentWillUpdate(){
  //   console.log("Component Will Update...");    
  // }
  // componentDidUpdate(){
  //   console.log("Component Did Update...");
  // }
  state={
    title: '',
    body: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => {
      this.setState({title: data.title, body: data.body});
    });
  }
  
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;