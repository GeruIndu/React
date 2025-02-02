import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";

const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItems key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
