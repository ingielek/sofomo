import React, {Component} from 'react'
import {Grid,
    Row,
    Col} from 'react-bootstrap'
const google = window.google;
class LastSearchMap extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: new google.maps.LatLng(this.props.data.latitude, this.props.data.longitude),
        });
    }
    render()
    {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={7} md={8} lg={8}>
                        <div onSubmit={this.handleSubmit} className="GoogleMap" ref="map"/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default LastSearchMap


