import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Detail from "./Detail";
import Edit from "./Edit";
import Listing from "./Listing";

function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listing />}></Route>
          <Route path="/soal2/create" element={<Create />}></Route>

          <Route path="/soal2/detail/:dataid" element={<Detail />}></Route>
          <Route path="/soal2/edit/:dataid" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
