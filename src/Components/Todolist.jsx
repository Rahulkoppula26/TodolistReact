import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

function Todolist(props) {
  
  return (
    <>
        <div className="task-item">
          <div className="task ">
            <input type="checkbox" className="icon"/>
            {props.element} 
            <FontAwesomeIcon className="icon " onClick={() =>{props.handleDelete(props.i)}} icon={faDeleteLeft} />
          </div>
        </div>
    </>
  );
}
export default Todolist;