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
        axios.get('http://freegeoip.net/json/')
            .then(response => {
                this.setState({
                    user: response.data,
                });
            })
            .catch(error => {
                console.log("Error", error)
            })

    }
    componentDidMount()
    {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: new google.maps.LatLng(52.5931, 19.0894),


        });

    }

    render()
    {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={6} lg={6}>
                        <div className="GoogleMap" ref="map"/>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <InfoUserLocation data={this.state.user}/>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default UserLocationMap