import AGV_pista from '../img/AGV_pista.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function createItem() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={AGV_pista} />
      <Card.Body>
        <Card.Title>Casco</Card.Title>
        <Card.Text>
            Casco AGV de carbono re zarpado en casco.
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default createItem;