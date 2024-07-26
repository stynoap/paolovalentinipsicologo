Sì, esistono soluzioni gratuite per visualizzare la posizione della tua azienda su una mappa in un sito web React. Ecco alcune alternative a Google Maps che offrono mappe gratuite:

### 1. OpenStreetMap (OSM) con Leaflet

Leaflet è una libreria JavaScript open-source che ti permette di creare mappe interattive utilizzando dati di OpenStreetMap. È una soluzione leggera e gratuita.

#### Passaggi per utilizzare Leaflet con React:

1. Installa le dipendenze necessarie:
   Utilizza npm o yarn per installare le librerie leaflet e react-leaflet.

  
Bash


   npm install leaflet react-leaflet
   
   oppure

  
Bash


   yarn add leaflet react-leaflet
   
2. Crea un componente della mappa:

  
React JSX


   import React from 'react';
   import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
   import 'leaflet/dist/leaflet.css';

   // Fix per icone mancanti in Leaflet
   import L from 'leaflet';
   delete L.Icon.Default.prototype._getIconUrl;
   L.Icon.Default.mergeOptions({
     iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
   });

   const MapComponent = () => {
     const position = [45.4642, 9.1900]; // Cambia con le coordinate della tua azienda

     return (
       <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
         <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
         <Marker position={position}>
           <Popup>
             La tua azienda qui.
           </Popup>
         </Marker>
       </MapContainer>
     );
   };

   export default MapComponent;
   
3. Utilizza il componente della mappa nel tuo progetto React:

  
React JSX


   import React from 'react';
   import MapComponent from './MapComponent'; // Assicurati che il percorso sia corretto

   function App() {
     return (
       <div className="App">
         <h1>La nostra azienda</h1>
         <MapComponent />
       </div>
     );
   }

   export default App;
   
### 2. Mapbox

Mapbox offre una versione gratuita con un limite di utilizzo mensile generoso. È una potente alternativa a Google Maps con molte funzionalità avanzate.

#### Passaggi per utilizzare Mapbox con React:

1. Registrati su Mapbox:
   Vai su [Mapbox](https://www.mapbox.com/) e crea un account per ottenere una chiave API.

2. Installa le dipendenze necessarie:
   Utilizza npm o yarn per installare react-map-gl.

  
Bash


   npm install react-map-gl
   
   oppure

  
Bash


   yarn add react-map-gl
   
3. Crea un componente della mappa:

   ```jsx
   import React from 'react';
   import ReactMapGL, { Marker } from 'react-map-gl';

   const MapboxMap = () => {
     const [viewport, setViewport] = React.useState({
       latitude: 45.4642, // Cambia con le coordinate della tua azienda
       longitude: 9.1900,
       zoom: 13,
       width: '100%',
       height: '400px'
     });

     return (
       <ReactMapGL
         {...viewport}
         mapboxApiAccessToken='LA_TUA_API_KEY_MAPBOX'
         onViewportChange={nextViewport => setViewport(nextViewport)}
         mapStyle="mapbox://styles/mapbox/streets-v11"
       >
         <Marker latitude={45.4642} longitude={9.1900}>
           <div>
             <svg
               height="20"
               viewBox="0 0 24 24"
               style={{ fill: 'red', stroke: 'none' }}
             >
               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
             </svg