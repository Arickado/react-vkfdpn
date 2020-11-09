import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.curso = {
      nome: "Desenvolvedor Full-Stack",
      objetivo: "Aprender tecnologias incriveis",
      tecnologias: "Javascript, Typescript, Reactjs"
    };
  }

  getTitulo(texto) {
    return <h1>{texto}</h1>;
  }

  getParagrafo(nome, texto) {
    return (
      <p>
        <b>{nome}: </b>
        {texto}
      </p>
    );
  }

  render() {
    return (
      <div>
        {this.getTitulo(this.curso.nome)}
        {this.getParagrafo("Objetivo", this.curso.objetivo)}
        {this.getParagrafo("Tecnologias aprendidas", this.curso.tecnologias)}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
