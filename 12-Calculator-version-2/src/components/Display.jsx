import style from './Display.module.css'

function Display({expression}) {

    return (
        <input type="text" className={style.input} value={expression} readOnly/>
    )
}

export default Display;