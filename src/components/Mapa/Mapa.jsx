import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './style.css';


import L from "leaflet";

function Mapa (){
    const markerIcon = new L.Icon({
        iconUrl:require("./Icons/pingMapa.webp"),
        iconSize:[45,45],
    });
    const barra = [-23.0054, -43.3133];
    const ibmec = [-23.005444, -43.31333]
    const BarraShopping = [-22.99757464556799, -43.35807188448556]
    return(                      
            <div>                        
                <MapContainer center={barra} zoom={13}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={ibmec} icon={markerIcon}>
                            <Popup>
                            Ibmec
                            </Popup>
                        </Marker>
                        <Marker position={BarraShopping} icon={markerIcon}>
                            <Popup>
                            BarraShopping
                            </Popup>
                        </Marker>
                </MapContainer>
                
            </div>
       
    );
}

export default Mapa;