import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import NavMenu from './components/navbar'
import SimpleMap from './components/userlocation'
import SearchBox from './components/searchbox'
import Searchy from './components/trial'
import InfoUserLocation from './components/informationUserLoc'
import axios from 'axios'
class App extends Component {

    constructor(){
        super();
        this.state = {
            location: []
        };
    }
    componentDidMount() {
        axios.get('http://freegeoip.net/json/')
            .then(response => {
                this.setState({
                    location: response.data
                });
            })
            .catch(error => {
                console.log("Error", error)
            })
    }

  render() {
        console.log(this.state.location);
    return (
      <div >
        <Grid>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <NavMenu/>
                </Col>
            </Row>
              <Row className="show-grid">
                  <Col xs={5} md={6} lg={7}>
                      <Searchy/>
                  </Col>
                  <Col xs={3} md={4} lg={5}>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
