import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/Loading_Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
