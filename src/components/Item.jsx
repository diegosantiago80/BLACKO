import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Item = ({ item }) => {
    return (
        <Card className="card-custom m-2">
            <Card.Img variant="top" src={item.pictureUrl} className="card-img-custom" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.category}</Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">DETALLE</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Item;
