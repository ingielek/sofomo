import React, {Component} from 'react'
const google = window.google;
class LastSearchMap extends Component {
    constructor(props) {
        super(props);
        this.newLocation = this.newLocation.bind(this)
    }
        componentDidMount()
        {
            new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: new google.maps.LatLng(51.5074, 0.1278),


            });

            }

    newLocation = (props) => {
        let lat = this.props.data.latitude;
        let long = this.props.data.longitude;
        new google.maps.setCenter(this.refs.map, {
            zoom: 12,
            center: new google.maps.LatLng(lat, long)
        });
    };
        render()
        {
            return (
                <div onSubmit={this.newLocation} className="GoogleMap" ref="map"/>
            )
        }
    }

export default LastSearchMap


