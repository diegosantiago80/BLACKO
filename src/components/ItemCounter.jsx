import { useState } from "react"



export const ItemCounter = ({Stock,onAdd})=>{
    const [counter,setCounter]=useState(1)

    const handleIncrease=()=>{
        if(counter<Stock)setCounter((prev)=>prev+1)
    }

    const handleDecrease=()=>{
        if(counter>1)setCounter((prev)=>prev-1)
    }

    const handleAdd=()=>{
        onAdd(counter)
        setCounter(1)
    }
    

    return (
        <>
          <div className="button-group">
            <button className="counter-button" onClick={handleIncrease}>+</button>
            <span className="counter-value">{counter}</span>
            <button className="counter-button" onClick={handleDecrease}>-</button>
          </div>
          <button className="add-to-cart-button" onClick={handleAdd}>agregar al Carrito</button>
        </>
      );
      
}