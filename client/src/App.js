import AddUser from "./Component/AddUSer";
import AllUser from "./Component/AllUser";
import CrudOperation from "./Component/CrudOpearion";
import NavBar from "./Component/NavBar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<CrudOperation />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/all" element={<AllUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
