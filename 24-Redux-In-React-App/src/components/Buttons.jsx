import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputData = useRef();

  const handleIncrease = () => {
    dispatch({
      type: "INCREASE",
    });
  };

  const handleDecrese = () => {
    dispatch({
      type: "DECREASE",
    });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputData.current.value,
      },
    });
    inputData.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputData.current.value,
      },
    });
  };

  const handlePrivacyToggle = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          fdprocessedid="in7man"
          onClick={handleIncrease}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          fdprocessedid="xjcqh"
          onClick={handleDecrese}
        >
          -1
        </button>
        <button className="btn btn-warning" onClick={handlePrivacyToggle}>
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-mar">
        <input
          type="text"
          placeholder="Enter Number"
          className="input"
          ref={inputData}
        />
        <button
          type="button"
          className="btn btn-info"
          fdprocessedid="xjcqh"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          fdprocessedid="xjcqh"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Buttons;
