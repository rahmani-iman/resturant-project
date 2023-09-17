import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleMapClick = (event) => {
    // Get the latitude and longitude of the clicked position
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();

    // Call the Geocoding API to retrieve the address details
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat: clickedLat, lng: clickedLng } },
      (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            // Extract the formatted address from the API response
            const address = results[0].formatted_address;

            // Update the selected address state
            setSelectedAddress(address);
          } else {
            console.log("No results found");
          }
        } else {
          console.log("Geocoder failed due to: " + status);
        }
      }
    );
  };

  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBXXVoMStmKZYSB3iHC56KcTF0hI_V7kLs&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {mapLoaded && (
        <LoadScript googleMapsApiKey="AIzaSyBXXVoMStmKZYSB3iHC56KcTF0hI_V7kLs">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 53.23, lng: 35.34 }}
            zoom={10}
            onClick={handleMapClick}
          >
            {selectedAddress && <Marker position={selectedAddress} />}
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default MapContainer;

//api  AIzaSyBXXVoMStmKZYSB3iHC56KcTF0hI_V7kLs
//api AIzaSyCW3NFRIDAQrmOEOr47bv0i1NIM74K04vQ
