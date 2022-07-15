import ItemList from "./ItemList";


function greetings (){
    return (
        <div>
        <div>
        <h1>Bienvenidos a Moto Fest!</h1>
        <h2>Accesorios, repuestos, indumentaria, todo, para vos y tu moto, en el mismo lugar.</h2>
        </div>
        <div>
            <ItemList/> 
            <ItemList/>            
            <ItemList/>
        </div>
        </div>
    )
    }

export default greetings;