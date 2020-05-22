import React, { Component } from 'react';
import { cardList } from "./components/card-list/card-list.component";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [

      ]
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <cardList>
          {
            this.state.monsters.map(
              monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </cardList>
      </div>
    );
  }
}

export default App;
