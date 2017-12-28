import React from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from 'google-map-react'

const AnyReactComponent = ({ text }) => (<div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
}}>
    {text}
</div>
);

class Map extends React.Component {
    static defaultProps = {
        center: {lat: this.props.data.latitude, lng: this.props.data.longitude},
        zoom: 11
    };

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <GoogleMap
                    bootstrapURLKeys={{
                        key: "AIzaSyAck9qDZwhM3ShYJNoDLtBDxufZXYLO_5M",
                        language: 'pl',
                    }}
                />
                <AnyReactComponent
                    lat={this.props.data.latitude}
                    lng={this.props.data.longitude}
                    text={'Here!'}
                />
            </GoogleMapReact>
        );
    }
}

export default Map