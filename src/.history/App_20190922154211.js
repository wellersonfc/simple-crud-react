import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(){
    super();
    this.state = {Lista : [{nome:'Luiz',email:'luiz@gosto.com', senha:'123456'}]};
  }
  render(){
    return(
      <div className="App">
      <div className="container">
        <div className="form-autor">
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

        <div className="lista-autor pt-3">
          <table class="table">
            <thead class="thead-dark table-striped">
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }
}
