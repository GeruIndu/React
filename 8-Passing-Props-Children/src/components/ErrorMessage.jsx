function ErrorMessage( {foodItems} ) {

    if(foodItems.length === 0)
        return (
            <h3>I am hungry</h3>
        )
}

export default ErrorMessage;