import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Thankyou from "./pages/Thankyou";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;