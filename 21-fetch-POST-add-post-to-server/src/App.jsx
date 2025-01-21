import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import Sidebar from "./components/sideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostItemsContextProvider from "./store/Post-items-store";

function App() {
  const [selectItem, setSelectItem] = useState("Home");

  return (
    <PostItemsContextProvider>
      <div className="main-container">
        <Sidebar selectItem={selectItem} setSelectItem={setSelectItem} />
        <div className="content">
          <Header />
          {selectItem === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostItemsContextProvider>
  );
}

export default App;
