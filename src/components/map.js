import React, {Component} from 'react'
const google = window.google;
class GoogleMap extends Component {
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
        new google.maps.setCenter({
            lat: props.data.latitude,
            lng: props.data.longitude
        });
    };
        render()
        {
            return (
                <div onSubmit={this.newLocation} className="GoogleMap" ref="map"/>
            )
        }
    }

export default GoogleMap


