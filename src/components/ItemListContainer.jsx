import ItemList from "./ItemList";


function itemInfo() {
    return (
        <div>
            <ItemList nombre='Casco' descripcion='Casco de competicion de fibra de carbono' />
            <ItemList nombre='Campera' descripcion='Campera con protecciones de media estacion' />
            <ItemList nombre='Guantes' descripcion='Guantes para pista, velocidad en firme' />
        </div>
    )
}

export default itemInfo;