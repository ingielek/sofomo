import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import NavMenu from './components/navbar'
import GoogleMap from './components/map'
import InfoUserLocation from './components/informationUserLoc'
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('http://freegeoip.net/json/' + this.state.value)
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
                <Row>
                    <Row className="show-grid">
                        <Col xs={12} md={12} lg={12}>
                            <div style={{width: '75%', height: '200px'}}>
                                <GoogleMap data={this.state.location}/>
                            </div>
                        </Col>
                    </Row>

                </Row>
            </Row>
              <Row className="show-grid">
                  <Col xs={4} md={4} lg={4}>

                  </Col>
                       <Col xs={5} md={6} lg={4}>
                          <form onSubmit={this.handleSubmit}>
                              <label>
                                  Type in IP or URL
                                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                              </label>
                              <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
                          </form>
                       </Col>
                          <Col xs={5} md={4} lg={4}>
                              <InfoUserLocation data={this.state.location}/>
                          </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
