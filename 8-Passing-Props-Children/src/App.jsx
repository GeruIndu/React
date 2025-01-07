import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import ItemLists from './components/ItemLists'
import Container from './components/Container'

function App() {
  
  let items = ['Milk', 'Salad', 'Rooti', 'Chicken']

  return (
    <>
      <Container>
        <h1 style={{'textAlign' : 'center'}}>Healthy Foods</h1>
        <ErrorMessage foodItems = {items} />
        <ItemLists foodItems = {items} />
      </Container>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta ipsam eligendi officiis, est aliquam, autem atque distinctio earum veniam laudantium? Exercitationem provident dolorum natus?</p>
      </Container>
    </>
  )
}

export default App
