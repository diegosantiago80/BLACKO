import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "Products", id);

        getDoc(refDoc)
            .then((snapshot) => {
                setItem({ ...snapshot.data(), id: snapshot.id });
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    return (
        <Container className="mt-4">
            <ItemDetail item={item} />
        </Container>
    );
};
