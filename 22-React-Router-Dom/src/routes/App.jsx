import "./App.css";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Sidebar from "../components/sideBar";
import PostItemsContextProvider from "../store/Post-items-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostItemsContextProvider>
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostItemsContextProvider>
  );
}

export default App;
