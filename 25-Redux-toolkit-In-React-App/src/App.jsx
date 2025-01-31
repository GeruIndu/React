import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ShowCounter from "./components/ShowCounter";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacy /> : <ShowCounter />}
            <Buttons />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
