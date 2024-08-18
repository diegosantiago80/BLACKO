import Item from "./Item";
import Container from "react-bootstrap/Container";

const ItemList = ({ items }) => {
    return (
        <Container className="mt-4 d-flex flex-wrap">
            {items.map((i) => (
                <Item key={i.id} item={i} />
            ))}
        </Container>
    );
};

export default ItemList;
