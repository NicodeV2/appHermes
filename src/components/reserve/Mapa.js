import React, { useCallback, useState } from 'react'
import { GoogleMap,useJsApiLoader, Marker,Autocomplete } from '@react-google-maps/api'

const center = {
  lat:-33.416889,
  lng:-70.673676
}


const containerStyle = {
  width: '95%',
  height: '300px'
  
}


const Mapa = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAyp04CKTy2Er9MekJQvHQyruci57me_y0",
    libraries:['places']
  })

  const [map,setMap] = useState(/** @type google.maps.Map */null);

  const onLoad = useCallback(
    (map)=>{
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    },[]
  )

  const onUnmount = useCallback(
    (map)=>{
      setMap(null)
    },[]
  )


  return isLoaded ? (
    <div className='mapa'>
      <div className='titulo borderTopLeftRight10 row1 col1'>
        <center>Mapa</center>
      </div>
      <div id='map'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
         }}
        >
          <Marker 
            position={center}
          />
        </GoogleMap>
      </div>
    </div>
  ):(<div></div>)
}

export default Mapa
