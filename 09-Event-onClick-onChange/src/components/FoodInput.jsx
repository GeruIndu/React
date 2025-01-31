import style from './FoodInput.module.css'

const FoodInput = () => {

    return (
        <input type="text" placeholder='Enter food to buy' className={style.input}
            onChange={(e) => (
                console.log(e.target.value)
            )}
        />
    )
}

export default FoodInput;