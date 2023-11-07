import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import { Mapastyle } from "./style";

function Mapa (){
    return(
        <div>
            <Mapastyle>
                <MapContainer center={[51.505, -0.09]} zoom={13}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
            </MapContainer>

            </Mapastyle>
        </div>
    );
}

export default Mapa;