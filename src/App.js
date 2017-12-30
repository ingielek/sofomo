import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import NavMenu from './components/navbar'
import LastSearchMap from './components/lastSearchMap'
import InfoLastSearch from './components/informationLastSearch'
import UserLocationMap from './components/userLocationMap'

import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: [],
            value: '',
            history: []
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
                    location: response.data,
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
            <Row className="show-grid">
                <Col xs={12} md={12} lg={12}>
                    <NavMenu/>
                </Col>
            </Row>
                    <Row className="show-grid">
                        <Col>
                                <UserLocationMap/>
                        </Col>
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

              </Row>
            <Row className="show-grid">
                <Col xs={7} md={8} lg={8}>
                    <LastSearchMap data={this.state.location}/>
                </Col>
                <Col xs={5} md={4} lg={4}>
                    <InfoLastSearch data={this.state.location}/>
                </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
