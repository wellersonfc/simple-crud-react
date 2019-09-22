import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
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
              <input id="nome" class="form-control" type="email" name="nome" value=""  placeholder="Digite o E-mail"/>
            </div>
            <div class="form-group">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" placeholder="Digite sua senha"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
