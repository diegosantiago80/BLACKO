import { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import products from "../productos.json";

export const ItemListContainer = () => {
    const [items, setItems]=useState([])
    const [loading, setLoading]=useState(true)

    const {id} = useParams()
    
    useEffect(() => {
        new Promise((resolve, reject) => setTimeout(resolve(products), 2000))
        .then((response) => {
            if(!id){
                setItems (response)
            }else{
                const filtered=response.filter((i)=>i.category === id)
                setItems(filtered)
            }
        })
        .finally(()=>setLoading(false));
    }, [id]);

    if(loading) return "WAIT"

    return (
        <Container className="mt-4 d-flex flex-wrap">
          {items.map((i) => (
            <Card key={i.id} className="card-custom m-2">
              <Card.Img variant="top" src={i.pictureUrl} className="card-img-custom" />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text>{i.description}</Card.Text>
                <Card.Text>{i.category}</Card.Text>
                <Link to={`/item/${i.id}`}>
                  <Button variant="primary">DETALLE</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Container>
      );
      


      
    


    }






