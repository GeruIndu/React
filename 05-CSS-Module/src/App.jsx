import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import ItemLists from './components/ItemLists'
import './App.css'

function App() {
  
  let items = ['Milk', 'Salad', 'Rooti', 'Chicken']
  // let items = []

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage foodItems = {items} />
      <ItemLists foodItems = {items} />
    </>
  )
}

export default App
