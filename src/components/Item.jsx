import React from "react";
import { Card, Button } from 'react-bootstrap';

const Item = ({item}) => {
    const {productName, description, price, stock, image} = item

    return (
        
        <Card style={{ width: '20rem', margin: '2rem'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    U$D{price}
                </Card.Text>
                <Card.Text>
                   Nos quedan {stock} unidades
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default Item