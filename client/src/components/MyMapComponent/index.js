import React from 'react';
import GoogleMapReact from 'google-maps-react';

const MyMapComponent = () => {
  const handleApiLoaded = (map, maps) => {
    // Access the 'maps' object here
    console.log(maps);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBo8JkbyffU2Dbv8_MDEsvcOzymPyEL0xQ' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      />
    </div>
  );
};

export default MyMapComponent;
