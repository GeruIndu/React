import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/FetchStatus";
import { itemActions } from "../store/itemSlice";

const FetchItems = () => {
  const fetcheStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetcheStatus.fetchDone === true) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStart());

    fetch("http://localhost:8080/items", { signal })
      .then((Response) => Response.json())
      .then((data) => {
        dispatch(itemActions.addInitialItems(data.items));
        dispatch(fetchStatusActions.markFetchStoped());
        dispatch(fetchStatusActions.markFetchDone());
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};

export default FetchItems;
