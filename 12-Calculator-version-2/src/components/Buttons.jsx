// import { Button } from 'bootstrap';
import styles from './Buttons.module.css'
import ButtonX from './ButtonX';

function Buttons({handleClick}) {

    let btnData = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return (
        <div className={styles.buttons}>
            {btnData.map((item) => (
                <ButtonX key = {item} item = {item} handleClick = {(item) => handleClick(item)}/>
            ))}
        </div>
    )
}

export default Buttons;