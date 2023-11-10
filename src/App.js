import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home.jsx";

import "./styles/Header.scss"
import "./styles/App.scss"
import "./styles/Home.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;