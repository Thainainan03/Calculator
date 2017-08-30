import React from 'react';

class Calculator extends React.Component{
	constructor(){
		super();
		this.state = {num1:0,num2:0};
	}
	setNum1(a){
		const num1 = a.target.value;
		this.setState({num1:num1});
	}
	setNum2(b){
		const num2 = b.target.value;
		this.setState({num2:num2});
	}


	render(){
		return (
			<div>
				<h1>Test calculator tag</h1>
				num1<input  onChange= {this.setNum1.bind(this)}/>
				num2<input  onChange= {this.setNum2.bind(this)}/>  
			
			<div>num1 : {this.state.num1}</div>
			<div>num2 : {this.state.num2}</div>
			{this.state.num1+       this.state.num2}
			</div>
			);
	}
}

export default Calculator;