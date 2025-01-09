import style from './FoodInput.module.css'

const FoodInput = ({handleKeyDown}) => {

    return (
        <input type="text" placeholder='Enter food to buy' className={style.input}
            onKeyDown={handleKeyDown}
        />
    )
}

export default FoodInput;