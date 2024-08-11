import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import products from "../productos.json";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(products), 2000))
        .then((response) => {
            const finded = response.find((i) => i.id === Number(id));
            setItem(finded);  // Guarda el producto encontrado en el estado
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    return (
        <Container className="mt-4">
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <h3>{item.description}</h3>
            <img src={item.pictureUrl} alt={item.title} /><br>
            </br>
            <b>{item.price}</b>
        </Container>
    );
};
