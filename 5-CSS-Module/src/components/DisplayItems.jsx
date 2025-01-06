import styles from './DisplayItems.module.css'

function DisplayItems( {data} ) {
    return (
        <li className={`${styles['kg-back']} list-group-item`}>
            <span className={styles['kg-font']}>{data}</span></li>
    )
}

export default DisplayItems;