import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./Components/Company";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={<Company />} />
        <Route
          path="/people
        "
          component={<People />}
        />
        <Route
          path="/company
        "
          component={<Company />}
        />
        <Route
          path="/company
        "
          component={<Company />}
        />
      </Routes>
    </Router>
  );
}

export default App;
