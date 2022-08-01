import { useState } from 'react';

function ItemCount({initial, stock,}) {

    const [count, setCount] = useState(initial);

    const aumentar = (props) => {
        if(count < stock){
            setCount(count + 1)
        }else{
            alert('Lamentablemente no hay más existencias :(')
        }
    }

    const disminuir = (props) => {
        if(count > initial){
        setCount(count - 1)
        }else{
            alert('No se puede quitar de la nada misma')
        }
    }

    function onAdd(props){
        if(count >=1 ){
        alert('Se han agregado '+count+' productos al carrito')
        }else{
            alert('Agregue algún producto')
        }
    }


    return (
        <div>
            {count}
            <div>
        <button onClick={onAdd}>Agregar</button>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>

        </div>
        </div>
    )
}

export default ItemCount;
