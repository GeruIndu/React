import DisplayItems from "./DisplayItems";
function ItemLists( {foodItems} ) {

    // const handleBtn = (e) => {
    //         console.log(e)
    //         console.log(`${item} has bought`)
    //     }
    

    return (
        <ul className="list-group">
        {foodItems.map(item => (
            <DisplayItems key={item} data = {item} handleBtn={() => console.log(`${item} has bought`)}/>
        ))}
        
      </ul>
    )
}

export default ItemLists;