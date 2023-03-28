import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import DetailResto from "./components/DetailResto";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<DetailResto />} />
          <Route>404 not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
