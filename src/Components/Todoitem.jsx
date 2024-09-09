
import { useState } from "react";
function Todoitem(props) {
  const [inputText, setInputText] = useState('');
    return (
      <>
        <div className="todo-input" >
          <input
            type="text"
            value={inputText}
            onChange={(e) => {setInputText(e.target.value)}}
            placeholder="Enter the task"
            className="w-50 border-2  font-semibold text-black p-2 rounded-md"
          />
          <button
            onClick={()=>{props.handleAdd(inputText);
             setInputText("")}} 
             className="bg-sky-500 p-1 pr-3 pl-3 rounded-md ml-2 text-white font-semibold text-lg border-black border-2">Add</button>
        </div>
      </>
    );
}
export default Todoitem;