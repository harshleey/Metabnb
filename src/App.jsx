import Home from "./pages/Home"
import PlaceToStay from "./pages/PlaceToStay";
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/place" element={<PlaceToStay />} />
      </Routes>
    </div>
  )
}

export default App
