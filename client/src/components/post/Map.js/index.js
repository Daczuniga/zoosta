import React, { useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    const { lat, lng } = event;
    const newMarker = {
      lat,
      lng,
    };
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const latInput = event.target.elements.lat.value;
    const lngInput = event.target.elements.lng.value;

    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);

    if (!isNaN(lat) && !isNaN(lng)) {
      const newMarker = {
        lat,
        lng,
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    }

    // Clear the form inputs
    event.target.reset();
  };

  const mapOptions = {
    // Set your desired map options here
    center: { lat: 42.255395, lng: -71.097629 },
    zoom: 10,
    // Add any other options you want, such as mapTypeControl, streetViewControl, etc.
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBo8JkbyffU2Dbv8_MDEsvcOzymPyEL0xQ', // Replace with your actual API key
        }}
        {...mapOptions} // Pass the mapOptions object as props
        onClick={handleMapClick}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="lat" placeholder="Latitude"  />
        <input type="text" name="lng" placeholder="Longitude"  />
        <button type="submit">Add Marker</button>
      </form>
    </div>
  );
};

const Marker = () => <div className="marker" />;

export default Map;



