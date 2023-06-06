import React, { useEffect } from 'react'
import { Map, Marker } from 'google-maps-react';
import MyMapComponent from '../MyMapComponent';
export default function Google() {
   
  return (
    <div>
    {/* <Map
    google={window.google}
    zoom={14}
    initialCenter={{ lat: 37.7749, lng: -122.4194 }}
  >
    <Marker
          position={{ lat: 37.7749, lng: -122.4194 }}
          icon={{
            url: 'path/to/custom-marker.png',
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
  </Map> */}
  <MyMapComponent/>
  </div>
  )
}
