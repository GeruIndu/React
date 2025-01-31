import style from './Button.module.css'

const ButtonX = ({item}) => {

    return (
        <button className={style.button}>{item}</button>
    )
}

export default ButtonX;