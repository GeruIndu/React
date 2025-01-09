import style from './Button.module.css'

const ButtonX = ({item, handleClick}) => {

    return (
        <button className={style.button} 
            onClick={() => handleClick(item)}
        >{item}</button>
    )
}

export default ButtonX;