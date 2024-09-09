import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="container flex justify-center items-center w-screen h-screen  " > 
        <div className="inner-container bg-slate-700 border-4 border-black w-2/6 h-4/6 rounded-xl ">
          <h1 className="text-center text-white font-semibold text-3xl mt-6 ">To-Do List</h1>
          <div className=" flex justify-center items-center"><Header className="" /></div>
        </div>
      </div>
    </>
  );
}

export default App;
