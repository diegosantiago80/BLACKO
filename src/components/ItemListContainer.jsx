import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Puff} from 'react-loader-spinner'
import { getFirestore,getDocs, where, query,collection } from "firebase/firestore";



export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db=getFirestore();

        const refCollection= !id ? collection(db,"Products"): query(collection(db,"Products"),where("Categoryid","==", id)) ;

        getDocs(refCollection).then((snapshot) => {
            setItems(
                snapshot.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()};
                })
            );
        }).finally(() => setLoading(false));
    }, [id]);

    if (loading) return (
        <div className="loading-container">
          <Puff
            height={120}
            width={120}
            color="#12c2e9"
            ariaLabel="puff-loading"
          />
        </div>
      );
    return <ItemList items={items} />;
};


