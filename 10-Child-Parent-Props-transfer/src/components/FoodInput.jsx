import style from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) => {

    return (
        <input type="text" placeholder='Enter food to buy' className={style.input}
            onChange={handleOnChange}
        />
    )
}

export default FoodInput;