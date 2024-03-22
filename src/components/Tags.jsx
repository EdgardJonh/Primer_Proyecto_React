import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function tags(props) {
  return (
    <Stack style={{justifyContent:'center'}}  direction="horizontal" gap={2}>
      <Badge bg={props.color}>{props.raza}</Badge>
    </Stack>
  );
}

export default tags;