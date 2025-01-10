import { MdDelete } from "react-icons/md";
import style from './TodoItem.module.css'

function TodoItem({ todoName, todoDate, onDeleteButton }) {
    return (
      <div className={style.container}>
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button"
                onClick={() => onDeleteButton(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;