import { useNavigate } from "react-router-dom";

const EmptyBag = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <center className="empty-container">
      <div className="empty">Empty Bag</div>
      <button className="btn btn-primary mybtn" onClick={handleClick}>
        Shop Now
      </button>
    </center>
  );
};

export default EmptyBag;
