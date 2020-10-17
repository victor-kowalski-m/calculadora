
import React, { Component } from 'react';
import './App.css';
import { Botao } from "./components/Botao";
import { Input } from './components/Input';
import { Clear } from './components/Clear';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      numAnterior:"",
      numAtual:"",
      operator:""
    }
  }

  addInput = val => {
    this.setState({input: this.state.input + val});
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") ===-1 ){
      this.setState({input: this.state.input + val});
    }
  }

  addInputZero = val => {
    if (this.state.input !== "0"){
      this.setState({input: this.state.input + val});
    }
  };

  soma = () => {
    this.state.numAnterior = this.state.input;
    this.setState({input: ""});
    this.state.operator="+";
  }

  subtracao = () => {
    this.state.numAnterior = this.state.input;
    this.setState({input: ""});
    this.state.operator="-";
  }

  multip = () => {
    this.state.numAnterior = this.state.input;
    this.setState({input: ""});
    this.state.operator="x";
  }

  divisao = () => {
    this.state.numAnterior = this.state.input;
    this.setState({input: ""});
    this.state.operator="/";
  }

  resultado = () => {
    this.state.numAtual = this.state.input;

    if (this.state.operator== "+"){
      this.setState({input: (parseFloat(this.state.numAnterior)+parseFloat(this.state.numAtual)).toLocaleString('en-US', {
        minimumFractionDigits: 0, maximumFractionDigits: 8})});
    }
    else if (this.state.operator== "-"){
      this.setState({input: (parseFloat(this.state.numAnterior)-parseFloat(this.state.numAtual)).toLocaleString('en-US', {
        minimumFractionDigits: 0, maximumFractionDigits: 8})});
    }
    else if (this.state.operator== "x"){
      this.setState({input: (parseFloat(this.state.numAnterior)*parseFloat(this.state.numAtual)).toLocaleString('en-US', {
        minimumFractionDigits: 0, maximumFractionDigits: 8})});
    }
    else if (this.state.operator== "/"){
      this.setState({input: (parseFloat(this.state.numAnterior)/parseFloat(this.state.numAtual)).toLocaleString('en-US', {
        minimumFractionDigits: 0, maximumFractionDigits: 8})});
    }
    this.setState({numAnterior: "" , operator:""})
  }

  render() {
    return (<div className="app">
     <div className="estruturaCalc">
       <br></br><br></br>
      <Input input={this.state.numAnterior+this.state.operator}></Input>
      <Input input={this.state.input}></Input>
      <div className="row">
          <Botao noClique={this.addInput}>7</Botao>
          <Botao noClique={this.addInput}>8</Botao>
          <Botao noClique={this.addInput}>9</Botao>
          <Botao noClique={this.divisao}>/</Botao>
        </div>
        <div className="row">
          <Botao noClique={this.addInput}>4</Botao>
          <Botao noClique={this.addInput}>5</Botao>
          <Botao noClique={this.addInput}>6</Botao>
          <Botao noClique={this.multip}>x</Botao>
        </div>
        <div className="row">
          <Botao noClique={this.addInput}>1</Botao>
          <Botao noClique={this.addInput}>2</Botao>
          <Botao noClique={this.addInput}>3</Botao>
          <Botao noClique={this.soma}>+</Botao>
        </div>
        <div className="row">
          <Botao noClique={this.addDecimal}>.</Botao>
          <Botao noClique={this.addInputZero}>0</Botao>
          <Botao noClique={this.resultado}>=</Botao>
          <Botao noClique={this.subtracao}>-</Botao>
        </div>
        <div className="row">
          <Clear Limpar={() => this.setState({input: ""})}>AC</Clear>
        </div>
      </div>
    </div>)
  }
}

export default App;