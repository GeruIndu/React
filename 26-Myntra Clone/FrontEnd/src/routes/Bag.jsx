import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import EmptyBag from "../components/EmptyBag";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagIds = useSelector((store) => store.bag);
  const bagItems = items.filter((item) => {
    const index = bagIds.indexOf(item.id);
    return index >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItems.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        {!bagIds.length ? <EmptyBag /> : <BagSummary />}
      </div>
    </main>
  );
};

export default Bag;
