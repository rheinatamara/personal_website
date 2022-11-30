import { Routes, Route } from "react-router-dom";
import { Home } from './pages'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
 
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  );
}

export default App;
