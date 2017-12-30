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
    newLocation = () => {
        new google.maps.setCenter(this.refs.map, {
            zoom: 12,
            center: new google.maps.LatLng(52.5200, 13.4050)
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


