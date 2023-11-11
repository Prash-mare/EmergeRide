import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home.jsx";
import Login from "./component/Login.jsx"

import "./styles/Header.scss"
import "./styles/App.scss"
import "./styles/Home.scss"
import "./styles/Login.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;