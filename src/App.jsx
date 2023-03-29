import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearch = () => {
    setSearchValue(inputValue);
  };
  return (
    <div className="App">
      <Header
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      ></Header>
      <Shop searchValue={searchValue}>y</Shop>
      <ToastContainer />
    </div>
  );
}

export default App;
