import { useState } from "react";
import Todolist from "./Todolist";
import Todoitem from "./Todoitem";


function Header() {
  const [newItem, setNewItem] = useState([]);


  const handleAdd = (inputText) => {
   if(inputText!==""){
    setNewItem([...newItem, inputText]);
   }
  }

  const handleDelete = (indexVal) => {
    const afterDelete = newItem.filter((newList,index) => index !==indexVal );
    setNewItem(afterDelete);
  }

  return (
    <>
      <div className=" input-field m-10 ">
        <div>
          <Todoitem handleAdd={handleAdd} />
          {newItem.map((element, i) => {
            return (
              <>
                <div className="data-container" ><Todolist
                  i={i}
                  key={i}
                  element={element}
                  handleDelete={handleDelete}
                /></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Header;