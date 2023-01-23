import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Id from "./components/Id";
import HelloColor from "./components/HelloColor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:id" element={<Id />} />
          <Route path="/:hello/:color/:background" element={<HelloColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
