import { createContext,useState } from "react";

export const itemContext = createContext();

export const Provider = ({ children }) => {
    const [items,setItems]=useState([]);

    const addItem= (item)=>{
        const alreadyExist= items.some((i)=>i.id===item.id)

        if(alreadyExist){
            const newItems=items.map((i)=>{
                if(i.id===item.id){
                    return {...i, quantity: i.quantity+item.quantity}
                }else{
                    return 1
                }
            })
            setItems(newItems)
        }else{ 
            setItems((prev) =>[...prev,item]);
        }
    }
    
    const reset=()=> setItems([])

    const remove=(id)=>{
        const filter= items.filter((i)=>i.id !== id)
        setItems(filter)

    }





    return <itemContext.Provider value={{addItem,items,reset,remove}}>{children}</itemContext.Provider>;
}
