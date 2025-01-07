import styles from './DisplayItems.module.css'

function DisplayItems( {data, handleBtn} ) {

    
    return (
        <>
            <li className={`${styles.kgFont} list-group-item`}>{data}
            <button className={`${styles.btn} btn btn-info`}
                // onClick={() => handleBtn(data)}
                onClick={handleBtn}
            >Buy</button>
            </li>
            
        </>
    )
}

export default DisplayItems;