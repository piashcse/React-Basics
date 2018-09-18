import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {withRouter} from 'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AboutMe extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyD50yRZoJ1ip_ILZdz7cTyx2cnxyJOknT4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                </GoogleMapReact>
            </div>
        )
    }
}

export default withRouter(AboutMe);