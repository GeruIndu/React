import DisplayItems from "./DisplayItems";
import { useState } from "react";

function ItemLists( {foodItems} ) {

    const [activeItems, setActiveItems] = useState([]);

    const handleBtn = (item) => {
        if(activeItems.includes(item))
        {
            let newList = activeItems.filter((i) => i !== item)
            setActiveItems(newList);
        }
        else{
            let itemsList = [... activeItems, item];
            setActiveItems(itemsList);
        }
    }
    

    return (
        <ul className="list-group">
        {foodItems.map(item => (
            <DisplayItems 
                key={item} 
                data = {item}
                bought = {activeItems.includes(item)}
                handleBtn={() => handleBtn(item)}
            />
        ))}
        
      </ul>
    )
}

export default ItemLists;