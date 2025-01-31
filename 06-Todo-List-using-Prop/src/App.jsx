import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  // let todoItems = [
  //   {

  //   }
  // ]

  return (
      <div className="container text-center mt-10 w-600">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder='Enter todo item' />
          </div>
          <div className="col-4">
            <input type="date" placeholder='Enter date' />
          </div>
          <div className="col-2">
          <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
  )
}

export default App
