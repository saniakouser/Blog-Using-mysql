import Home from "./Components/Home";
import Register from "./Components/Register";
import Single from "./Components/Single";
import Write from "./Components/Write";
import Login from "./Components/Login";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Routes>
       {/* <Route path="/" element={<Navbar/>}/> */}
       <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
