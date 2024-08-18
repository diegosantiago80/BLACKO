import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "../productos.json";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(products), 2000))
            .then((response) => {
                const finded = response.find((i) => i.id === Number(id));
                setItem(finded);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    return (
        <Container className="mt-4" >
            <ItemDetail item={item} />
        </Container>
    );
};
