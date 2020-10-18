
import React, { Component } from 'react';
import './App.css';
import { Botao } from "./components/Botao";
import { Input } from './components/Input';
import { Clear } from './components/Clear';
import { Slot } from './components/Slot';
import { Botaomemo } from "./components/Botaomemo";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      numAnterior:"",
      numAtual:"",
      operator:"",
      lista: []
    }
  }

  addInput = val => {
    if (this.state.input!="0"){
      this.setState({input: this.state.input + val});
    }
    else {
      this.setState({input: val});
    }
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

  salvar = () => {
    if (this.state.lista.length<7){ 
      this.state.lista.push(parseFloat(this.state.input))
      this.setState({lista: this.state.lista});
    }
    else {
      this.state.lista.splice(0,1);
      this.setState({lista: this.state.lista});
      this.state.lista.push(parseFloat(this.state.input))
      this.setState({lista: this.state.lista});
    }
  }

  recuperar = () => {
    if (this.state.lista.length>0){ 
     this.setState({input: this.state.lista[this.state.lista.length-1]})
    }
  }

  limpar = () => {
    this.setState({lista: []})
  }

  somar = () => {
    if (this.state.lista.length>0){
    this.state.lista[this.state.lista.length-1]=(parseFloat(this.state.lista[this.state.lista.length-1])+parseFloat(this.state.input)).toLocaleString('en-US', {
      minimumFractionDigits: 0, maximumFractionDigits: 8});}
    else{
      if (this.state.lista.length<7){ 
        this.state.lista.push(parseFloat(this.state.input))
        this.setState({lista: this.state.lista});
      }
      else {
        this.state.lista.splice(0,1);
        this.setState({lista: this.state.lista});
        this.state.lista.push(parseFloat(this.state.input))
        this.setState({lista: this.state.lista});
      }
    }
    this.setState({lista: this.state.lista})
  }

  limparitem = (posicao) => {
    this.state.lista.splice(posicao,1);
    this.setState({lista: this.state.lista});
  }

  recuperaritem = (posicao) => {
    this.setState({input: this.state.lista[posicao]})
  }

  render() {
    return (<div className="app">
     <div className="estruturaCalc">
       <br></br><br></br>
      <Input input={this.state.numAnterior+this.state.operator}></Input>
      <Input input={this.state.input}></Input>
      <div className="row">
          <Botao noClique={this.limpar}>MC</Botao>
          <Botao noClique={this.recuperar}>MR</Botao>
          <Botao noClique={this.somar}>M+</Botao>
          <Botao noClique={this.salvar}>MS</Botao>
        </div>
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
    <aside className="memoria">
      <h2>Memória</h2>    
    {this.state.lista.slice(0).reverse().map(
            (val,index) => <div className="rowmemo"> 
              <Slot slot={val}></Slot>
              <Botaomemo posicao={this.state.lista.length-1-index} noClique={this.limparitem}>MC</Botaomemo>
              <Botaomemo posicao={this.state.lista.length-1-index} noClique={this.recuperaritem}>MR</Botaomemo>
              <br></br>
            </div>
          )
        }
    </aside>
    </div>)
  }
}

export default App;