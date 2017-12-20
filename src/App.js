import React, { Component } from 'react';
import {Grid, Jumbotron} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Grid>
                <Jumbotron>
                 <h1>Localee</h1>
                <p>Show us Your point.</p>
                </Jumbotron>
        </Grid>

      </div>
    );
  }
}

export default App;
