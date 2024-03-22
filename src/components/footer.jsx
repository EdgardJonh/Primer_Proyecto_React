import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function footer() {
  return (
    <Card className="text-center">
      <Card.Header>Adopta un perrito.</Card.Header>
      <Card.Body>
        <Card.Title>+569 932 443 33</Card.Title>
        <Card.Text>
          En este sitio web podras hacer la adopcion de un perrito, busco mi nuevo hogar.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">© Todos los derechos reservados.</Card.Footer>
    </Card>
  );
}

export default footer;