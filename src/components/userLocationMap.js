import React, {Component} from 'react'
import {Grid,
        Row,
        Col} from 'react-bootstrap'
import axios from 'axios'
import InfoUserLocation from './informationUserLocation'
const google = window.google;
class UserLocationMap extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: []
        };

    }
    componentDidMount() {
        axios.get('http://freegeoip.net/json/')
            .then(response => {
                this.setState({
                    user: response.data,
                });
            })
            .catch(error => {
                console.log("Error", error)
            });
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: new google.maps.LatLng(this.state.user.latitude, this.state.user.longitude),


        });
    }

    render()
    {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={7} md={8} lg={8}>
                        <div className="GoogleMap" ref="map"/>
                    </Col>
                    <Col xs={5} md={4} lg={4}>
                        <InfoUserLocation data={this.state.user}/>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default UserLocationMap