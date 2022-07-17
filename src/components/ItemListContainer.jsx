import { propTypes } from "react-bootstrap/esm/Image";
import ItemList from "./ItemList";
import Bienvenida from './Bienvenida';

function itemInfo(props) {
    return (
        <div>
            <Bienvenida nombre='Rider'/>
            <ItemList producto='Casco' descripcion='Casco de competicion de fibra de carbono' />
            <ItemList producto='Campera' descripcion='Campera con protecciones de media estacion' />
            <ItemList producto='Guantes' descripcion='Guantes para pista, velocidad en firme' />
        </div>
    )
}

export default itemInfo;