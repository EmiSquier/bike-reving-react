import {useState} from 'react'

function itemCount() {

    const array  = useState()
    console.log(array)

    let count = 0;
    let stock = document.getElementById('stock').value;

    const aumentar = () => {

        if (count < stock) {
            count++
        } else {
            alert('No hay más existencias');
        }

    }

    const disminuir = () => {
        count--
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

export default itemCount;
