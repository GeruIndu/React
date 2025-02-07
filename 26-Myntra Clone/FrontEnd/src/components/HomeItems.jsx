import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleClick = () => {
    dispatch(bagActions.addItemToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeItemFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button className="btn-add-bag btn btn-warning" onClick={handleRemove}>
          <CiCircleRemove />
          Remove from bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleClick}>
          <IoMdAddCircleOutline />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItems;
