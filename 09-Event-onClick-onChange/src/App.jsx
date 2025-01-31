import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import ItemLists from './components/ItemLists'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  
  let items = ['Milk', 'Salad', 'Rooti', 'Chicken']

  return (
    <>
      <Container>
        <h1 style={{'textAlign' : 'center'}}>Healthy Foods</h1>
        <FoodInput />
        <ErrorMessage foodItems = {items} />
        <ItemLists foodItems = {items} />
      </Container>
    </>
  )
}

export default App
