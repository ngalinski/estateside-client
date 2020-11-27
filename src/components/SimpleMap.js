import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import './css/Map.css';

const AnyReactComponent = ({text}) => <div>{text}</div>;

const SimpleMap = ({latitude = 42.334129, longitude = -71.097809}) => {
    const [center, setCenter] = useState({lat: latitude, lng: longitude});
    const [zoom, setZoom] = useState(16);
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={latitude}
                    lng={longitude}
                    name="Location"
                    color="blue"
                />
            </GoogleMapReact>
        </div>
    );
}

export default SimpleMap;
