import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap'
import './App.css';
import NavMenu from './components/navbar'
import UserLoc from './components/userlocation'
import SearchBox from './components/searchbox'
class App extends Component {
  render() {
    return (
      <div >
        <Grid>
            <NavMenu/>
        </Grid>
          <Grid>
              <Row className="show-grid">
                  <UserLoc/>
              </Row>
          </Grid>
          <Grid>
              <SearchBox/>
          </Grid>
      </div>
    );
  }
}

export default App;
