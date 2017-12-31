import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }



    handleSubmit(event) {
        event.preventDefault();
        var ipRegex = new RegExp('\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b');
        var urlValidator = new RegExp('((ftp|http|https):\\/\\/)?');
        if (this.state.value === ""){
            return;
        } else if ((urlValidator.test(this.state.value) || ipRegex.test(this.state.value))) {
            axios.get('http://freegeoip.net/json/' + this.state.value)
                .then(response => {
                    this.setState({
                        location: response.data,
                    })
                    .then(sessionStorage.setItem(this.state.value, JSON.stringify(this.state.value)))
                })
                .catch(error => {
                    console.log("Error", error)
                });
        } else {
            return (
                alert("Wrong IP or web address")
            );
        }
    }
    render() {
    return (
      <div >
        <Grid>
            <Row className="show-grid">
                <Col>
                    <ul>
                        <li>{JSON.parse(sessionStorage.getItem(this.state.value, this.state.value))}</li>
                    </ul>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col>
                    <p><strong>This is Your Location</strong></p>
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
                <Col>
                    <p><strong>This is Your search result</strong></p>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={7} md={8} lg={8}>
                    <LastSearchMap data={this.state.location}/>
                </Col>
                <Col xs={5} md={4} lg={4}>
                    <div className="UserLocationPara">
                    <InfoLastSearch data={this.state.location}/>
                    </div>
                </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
