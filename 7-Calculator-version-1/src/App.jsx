import styles from './App.module.css'
import Buttons from './components/Buttons';
import Display from './components/Display';

function App () {


    return (
        <div className={styles.container}>
            <Display />
            <Buttons />
        </div>
    )
}

export default App;