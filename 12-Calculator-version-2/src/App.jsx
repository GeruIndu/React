import { useState } from 'react';
import styles from './App.module.css'
import Buttons from './components/Buttons';
import Display from './components/Display';

function App () {

    let [exp, setExp] = useState('');

    const handleClick = (item) => {
        if(item === 'C')
            setExp("");
        else if(item === '=')
        {
            let expression = eval(exp);
            setExp(expression);
        }
        else
        {
            let newExp = exp + item;
            setExp(newExp);
        }
    }

    return (
        <div className={styles.container}>
            <Display expression = {exp}/>
            <Buttons handleClick = {(item, e) => handleClick(item, e)}/>
        </div>
    )
}

export default App;