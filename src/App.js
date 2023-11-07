import logo from './logo.svg';
import './App.css';
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



function App() {

  return (
    <div>
      <MapContainer center={[-22.986, -43.237]} zoom={13}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.986, -43.237]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
}

export default App;
