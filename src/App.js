import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./COMPONENTS/CreateBlog";
import Home from "./COMPONENTS/Home";
import Login from "./COMPONENTS/Login";

import ReadSection from "./COMPONENTS/ReadSection";
import SignUp from "./COMPONENTS/SignUp";

function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/post" element={<ReadSection/>}></Route>
          <Route path="/createblog" element={<CreateBlog/>}></Route>
          <Route path="/ReadSection" element={<ReadSection/>}></Route>
          

        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
