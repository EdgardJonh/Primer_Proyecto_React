import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'
const Cards = (props)=>{
    return(
        <Card style={{ width: "18rem", margin:'1%' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
         
         <Tags color={props.color} raza={props.raza} ></Tags>
        </Card.Body>
      </Card>
    )
} 
export default Cards