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
    );
  }
}


export default App;
