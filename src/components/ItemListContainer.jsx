import React, { useEffect, useState, setState } from "react";
import ItemList from './ItemList'
import Casco from '../img/AGV_pista.jpg'
import Campera from '../img/campera_alpinestars.jpg'
import Guantes from '../img/guantes_alpinestars.jpg'



const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const productos = [
        { id: 1, productName: 'Casco', description: 'Casco de competicion de fibra de carbono', price: 1200, stock: 10, image: Casco },
        { id: 2, productName: 'Campera', description: 'Campera con protecciones de media estacion', price: 560, stock: 30, image: Campera},
        { id: 3, productName: 'Guantes', description: 'Guantes para pista, velocidad en firme', price: 290, stock: 43, image: Guantes},
    ]

    const task = new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(productos)
        }, 5000))

    useEffect(() => {
        task
            .then(resolve => setItems(resolve))
            .catch(error => console.log('error'))
    }, []);

    return (
        < div >
            <ItemList items={items} />
        </div >
    )

}

export default ItemListContainer;