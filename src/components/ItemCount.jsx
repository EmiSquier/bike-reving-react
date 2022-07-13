import { useState } from 'react'

function ItemCount() {

    const [count, setCount] = useState(0);
    const stock = 10;

    const aumentar = () => {
        if(count < stock){
            setCount(count + 1)
        }else{
            alert('No hay más existencias')
        }
    }

    const disminuir = () => {
        if(count > 0){
        setCount(count - 1)
        }else{
            alert('No se puede quitar de la nada misma')
        }
    }


    return (
        <div>
            <input type='number' placeholder='Stock' id='stock' /><br></br><br></br>
            {count}<br></br><br></br>
            <button onClick={aumentar}>Agregar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default ItemCount;
