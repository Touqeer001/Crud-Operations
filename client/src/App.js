import AddUser from "./Component/AddUSer";
import AllUser from "./Component/AllUser";
import CrudOperation from "./Component/CrudOpearion";
import EditUser from "./Component/Edit";
import NavBar from "./Component/NavBar";
// import { BrowserRouter, Routes, Route }  from "react-router-dom";
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
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
