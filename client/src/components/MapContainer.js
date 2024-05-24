import React, { useState } from 'react';
import { Input } from "semantic-ui-react";
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const MapContainer = ({ onLocationClick }) => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [locationName, setLocationName] = useState('');

  const mapStyles = {
    margin: "0 auto", 
    width: "100%",     
    maxWidth: "600px", 
    height: "400px",
    position: "relative",
    overflow: "hidden",
    // borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: '0 4px 8px rgba(255, 0, 0, 0.4)'
  };

  const defaultCenter = {
    lat: 39.6433,
    lng: -106.3781
  };

  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setClickedLatLng({ lat, lng });
    console.log("clickedLatLng", clickedLatLng)
    
    // Fetch location information using Google Maps Geocoding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAphlaQwuL0msVjGt04wdLmHZRCy32XXxs`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const location = data.results[0];
      const component1 = location.address_components[1];
      const component3 = location.address_components[3];
      // Set the location name based on the extracted components
      console.log('location', location); 
      const newLocationName = `${component1.long_name}, ${component3.long_name}`;
      // const newLocationName = location.geometry.location
      setLocationName(newLocationName);
      onLocationClick(newLocationName);
      console.log("onlocationclick", newLocationName)
      // Log the new location name directly
    }
    // if (data.results && data.results.length > 0) {
    //   const location = data.results[0];
    //   const locationName = location.formatted_address; // Extract location name from formatted_address field
    //   const locationLatLng = location.geometry.location; // Extract location's latitude and longitude
    //   setLocationName(locationName);
    //   onLocationClick(`${locationLatLng.lat},${locationLatLng.lng}`); 
    // }
  };
  

  const onLoad = (map) => {
    setMap(map);
  };

  const onSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length === 0) return;
  
    const bounds = new window.google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) return;
      const location = place.geometry.location; // Get the location directly
      setClickedLatLng({
        lat: location.lat(),
        lng: location.lng(),
      });
      bounds.extend(location);
      handleMapClick({ latLng: location }); // Pass the location to handleMapClick
    });
    map.fitBounds(bounds);
  };
  
  

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAphlaQwuL0msVjGt04wdLmHZRCy32XXxs"
      libraries={['places']}
    >
      <div style={{display: 'flex', alignItems: 'center', flrexDirection: "column"}}>
       <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <Input
            type="text"
            placeholder="Search for a location"
            style={{
              boxSizing: `border-box`,
              // border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              marginTop: `10px`,
              // marginLeft: `200px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              marginBottom: '10px'
            }}
          />
        </StandaloneSearchBox>
        </div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={clickedLatLng || defaultCenter}
        onClick={handleMapClick}
        onLoad={onLoad}
      >
        {clickedLatLng && (
          <Marker
            position={{ lat: clickedLatLng.lat, lng: clickedLatLng.lng }}
          />
        )}
       
      </GoogleMap>
      {clickedLatLng && (
        <div style={{color: 'white'}}>
          <p>Clicked Location:</p>
          <p>Latitude: {clickedLatLng.lat}</p>
          <p>Longitude: {clickedLatLng.lng}</p>
          <p>Location Name: {locationName}</p>
        </div>
      )}
    </LoadScript>
  );
};

export default MapContainer;

