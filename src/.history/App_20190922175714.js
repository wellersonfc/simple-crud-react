import React, {Component} from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {lista : [], nome:'',email:'', senha:''};
  }

  componentDidMount() {
    /*fetch("https://cdc-react.herokuapp.com/api/autores")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({lista:result});
        },
        (error) => {
          console.log('Deu erro');
        }
      )*/
  }

  CadastroAutor(evento){
    evento.preventDefault();
    fetch('https://cdc-react.herokuapp.com/api/autores', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 7, str: 'Some string: &=&'})
    }).then(res=>res.json())
      .then(res => console.log('erro'));
  }

  setNome(evento){
    this.setState(
      {nome:evento.target.value}
    );
  }

  setEmail(evento){
    this.setState(
      {email:evento.target.value}
      );
  }
  setSenha(evento){
    this.setState(
      {senha:evento.target.value}
    )
  }

  render(){
    return(
      <div class="container">
        <h1 className="pt-2">Cadastro de Autor</h1>
        
        <div className="form-cadastro pt-3">
          <form onSubmit={this.CadastroAutor.bind(this)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Nome</label>
              <input id="nome" class="form-control" type="text" name="nome" value={this.state.nome} onChange={this.setEmail} placeholder="Digite o Autor" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input id="email" class="form-control" type="email" name="email" value={this.state.email} onChange={this.setEmail} placeholder="Digite o E-mail"/>
            </div>
            <div class="form-group">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" value={this.state.senha} onChange={this.setSenha}  placeholder="Digite sua senha"/>
            </div>
            <button type="submit" class="btn btn-dark">Cadastrar</button>
          </form>
        </div>
        <div className="listagem pt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>-Email</th>
              </tr>
            </thead>
            <tbody>
                  {
                    this.state.lista.map(function(autor){
                      return (
                        <tr key={autor.id}>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                        );
                      })
                  }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default App;
