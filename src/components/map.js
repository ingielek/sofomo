import React, {Component} from 'react'
const google = window.google;
class GoogleMap extends Component {

        componentDidMount()
        {
            new google.maps.Map(this.refs.map, {
                zoom: 12,
                center: new google.maps.LatLng(51.5074, 0.1278),
                defaultCenter: new google.maps.LatLng(this.props.data.latitude, this.props.data)


            });

        }
        render()
        {
            return (
                <div className="GoogleMap" ref="map"/>
            )
        }
    }

export default GoogleMap


