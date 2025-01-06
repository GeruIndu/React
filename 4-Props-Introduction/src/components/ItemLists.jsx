import DisplayItems from "./DisplayItems";
function ItemLists( {foodItems} ) {


    return (
        <ul className="list-group">
        {foodItems.map(item => (
            <DisplayItems key={item} data = {item} />
        ))}
        
      </ul>
    )
}

export default ItemLists;