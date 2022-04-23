import logo from "./logo.svg";
import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Base from "./Layout/Base/Base";

// ..............Pages ................
import Marketplace from "./Pages/Marketplace/Marketplace";
import Staking from "./Pages/Staking/Staking";
// ..............Pages ................End
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Marketplace />}>
            </Route>
            <Route path="/staking" element={<Staking />}>
            </Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
