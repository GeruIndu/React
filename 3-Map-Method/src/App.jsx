import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  let items = ['Milk', 'Salad', 'Rooti', 'Chicken']

  return (
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {items.map(item => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
        
      </ul>
    </>
  )
}

export default App
