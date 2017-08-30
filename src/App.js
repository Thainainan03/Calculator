import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component';
import Footer from './Components/Footer.component';
import Calculator from './Components/Calculator.component';

class App extends Component {
  constructor(){
    super();
    this.Age=20;
    this.name="best";
    this.state = {name:"Jame",age:20};
  }
  onClick(){
    this.setState({name: "BoB"});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({age:age});
  }
  getval(){
    return "getVal";
  }
  render() {
    
    const myname = "best";
 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Hello , {myname} </div>
        <div>Calculate 3+2 = {3+2}</div>
        <div>Call getval method : {this.getval()}</div>
        <div>Age:{this.Age}</div>
        <div>name:{this.name}</div>
        <Header title="Test title" name="Dear" />
        <div>My name is {this.state.name}</div>
        <div>My age is {this.state.age}</div>
        <button onClick={this.onClick.bind(this)}>Click me</button>
        <input onChange= {this.setAge.bind(this)} />
        <Footer />
        <div>
          <Calculator />
        </div>

      </div>

    );
  }
}




export default App;
