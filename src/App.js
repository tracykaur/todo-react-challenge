import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import toDos from './data';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <ul>
        {toDos.map(item => (
          <li>{ item }</li>
        ))}
      </ul>
    );
  }
}

export default App;
