import styles from './DisplayItems.module.css'

function DisplayItems( {data} ) {

    const handleBtn = (e) => {
        console.log(e)
        console.log(`${data} has bought`)
    }

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