import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputData = useRef();

  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrese = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputData.current.value));
    inputData.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputData.current.value));
    inputData.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.privacyPolicy());
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
