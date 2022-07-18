import "./App.css";
import Nav from "./Component/NavBarr"
import Login from "./Component/Login";
import Home from "./Component/Home";
import Register from "./Component/Register"
import Cards from "./Component/Cards"
import Edit from "./Component/EditCard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
