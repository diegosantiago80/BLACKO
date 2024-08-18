import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "../productos.json";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(products), 2000))
            .then((response) => {
                if (!id) {
                    setItems(response);
                } else {
                    const filtered = response.filter((i) => i.category === id);
                    setItems(filtered);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return "WAIT";

    return <ItemList items={items} />;
};




