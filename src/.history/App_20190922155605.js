import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {Lista : [{nome:'Luiz',email:'luiz@gosto.com', senha:'123456'}]};
  }

  render(){
    return(
      <div class="container">
        <h1></h1>
        <div className="form-autor pt-3">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Nome</label>
              <input id="nome" class="form-control" type="text" name="nome" value=""  placeholder="Digite o Autor"/>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail</label>
              <input id="email" class="form-control" type="email" name="email" value=""  placeholder="Digite o E-mail"/>
            </div>
            <div class="form-group">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" placeholder="Digite sua senha"/>
            </div>
            <button type="submit" class="btn btn-dark">Cadastrar</button>
        </form>
      </div>
      </div>
    );
  }
}


export default App;
