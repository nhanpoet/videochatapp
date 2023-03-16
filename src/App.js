import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Room from "./components/Rooms/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
