import React, {Component} from 'react'
const google = window.google;
class GoogleMap extends Component{


    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: parseFloat(this.props.data.latitude),
                lng: parseFloat(this.props.data.longitude)
            }
        });

    }
    render(){
        return (
            <div className="GoogleMap" ref="map" />
        )
    }
}

export default GoogleMap


