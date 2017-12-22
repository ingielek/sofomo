import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import NavMenu from './components/navbar'
import UserLoc from './components/userlocation'
import SearchBox from './components/searchbox'
import axios from 'axios'

class App extends Component {

    constructor(){
        super();
        this.state = {
            country : ''
        };
    }
    componentDidMount() {
        axios.get('freegeoip.net/json/www.ppe.pl')
            .then(response => {
                this.setState({
                    country: response
                });
            })
            .catch(error => {
                console.log("Error", error)
            })
    }

  render() {
    return (
      <div >
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <NavMenu/>
                </Col>
            </Row>
            <Row className="show-grid">
                  <Col>
                      <UserLoc/>
                  </Col>
            </Row>
              <Row className="show-grid">
                  <Col>
                      <SearchBox/>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
