import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Card className="card-custom m-2">
            <Card.Img variant="top" src={item.Imageid} />
            <Card.Body>
                <Card.Title>{item.Title}</Card.Title>
                <Card.Text>{item.Description}</Card.Text>
                <Card.Text>{item.Categoryid}</Card.Text>
                <div>
                    <Link to={`/item/${item.id}`}>
                        <Button variant="primary">DETALLE</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;

