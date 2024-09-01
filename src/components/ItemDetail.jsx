import React, { useContext } from "react";
import { itemContext } from "../contexts/itemContext";
import { ItemCounter } from "./ItemCounter";

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(itemContext);

    
    const onAdd=(quantity)=>addItem({...item,quantity})

    return (
        <div>
            <h1>{item.Title}</h1>
            <h2>{item.Categoryid}</h2>
            <h3>{item.Description}</h3>
            {item.Imageid && <img src={item.Imageid} alt={item.Title} height={300} />}<br/>
            {item.Price && <b>Precio: ${item.Price}</b>} <br/>
            <b>Stock:  {item.Stock} unidades</b><br/><br/>
            <br></br>
            <ItemCounter Stock={item.Stock} onAdd={onAdd} />
           
        </div>
    );
};

export default ItemDetail;
