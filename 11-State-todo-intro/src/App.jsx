import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import ItemLists from './components/ItemLists'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {
  
  let [items, setItems] = useState([]);

  const onKeyDown = (e) => {
    if(e.key === 'Enter')
    {
      const newTodo = e.target.value;
      const todos = [...items, newTodo];
      e.target.value = "";
      setItems(todos);
    }

  }

  return (
    <>
      <Container>
        <h1 style={{'textAlign' : 'center'}}>Healthy Foods</h1>
        <FoodInput handleKeyDown = {onKeyDown}/>
        <ErrorMessage foodItems = {items} />
        <ItemLists foodItems = {items} />
      </Container>
    </>
  )
}

export default App
