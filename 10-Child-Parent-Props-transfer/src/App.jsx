import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import ItemLists from './components/ItemLists'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  
  let items = ['Milk', 'Salad', 'Rooti', 'Chicken']

  const handleOnChange = (e) => (
    console.log(e.target.value)
  )

  return (
    <>
      <Container>
        <h1 style={{'textAlign' : 'center'}}>Healthy Foods</h1>
        <FoodInput handleOnChange = {handleOnChange}/>
        <ErrorMessage foodItems = {items} />
        <ItemLists foodItems = {items} />
      </Container>
    </>
  )
}

export default App
