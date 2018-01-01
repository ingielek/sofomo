import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import LastSearchMap from './components/lastSearchMap'
import InfoLastSearch from './components/informationLastSearch'
import UserLocationMap from './components/userLocationMap'
import SearchList from './components/SearchList'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            value: '',
            history: [],
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
                })
                .then(sessionStorage.setItem(this.state.value, JSON.stringify(this.state.value)))
                .catch(error => {
                    console.log("Error", error)
                });
            this.setState({
                history: this.state.history + this.state.value + ", " ,
            });
            console.log(this.state.history)
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
                    <SearchList data={this.state.history}/>
                </Col>
                <Col>
                    <p className="marginBottom"><strong>This is Your Location</strong></p>
                </Col>
            </Row>
            <Row className="show-grid">
                    <Col xs={7} md={8} lg={8}>
                        <UserLocationMap/>
                    </Col>
            </Row>
              <Row className="show-grid">
                       <Col xs={5} md={4} lg={4}>
                          <form onSubmit={this.handleSubmit}>
                              <label className="marginTop">
                                  Type in IP or URL and press enter
                                  <input type="text" className="input-style" value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} />
                              </label>
                          </form>
                       </Col>
              </Row>
            <Row className="show-grid">
                <Col>
                    <p className="marginBottomAndTop"><strong>This is Your search result</strong></p>
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
