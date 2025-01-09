import styles from './DisplayItems.module.css'

function DisplayItems( {data, bought, handleBtn} ) {
    
    return (
        <>
            <li className={`${styles.kgFont} list-group-item ${bought && 'active'}`}>{data}
            <button className={`${styles.btn} btn ${bought ? 'btn-danger' : 'btn-info'}`}
                // onClick={() => handleBtn(data)}
                onClick={handleBtn}
            >{bought ? 'Remove' : 'Buy'}</button>
            </li>
            
        </>
    )
}

export default DisplayItems;