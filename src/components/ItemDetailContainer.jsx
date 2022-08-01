import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const detail = [

        {id: 1, productName: 'Casco', longDescription: ' LA PERFECCIÓN DE LA OBSESIÓN: La precisión de cada fracción, el éxtasis de los materiales. Logros que emocionan cuando se conquistan. La obsesión es superar los límites de la imaginación, redefiniendo todos los parámetros conocidos y considerados insuperables. La excelencia no es suficiente. Sé invencible.', price: 1200, stock: 10, image: Casco},
    ]

    const task = new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(detail)
        }, 2000))

    useEffect(() => {
        task
            .then(resolve => setItems(resolve))
            .catch(error => console.log('error'))
    }, []);

    return (
        < div >
            <ItemDetail detail={detail} />
            <ItemCount />
        </div >
    )

}

export default ItemListContainer