import logo from "./logo.svg";
import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Base from "./Layout/Base/Base";

// ..............Pages ................
import Marketplace from "./Pages/Marketplace/Marketplace";
import Staking from "./Pages/Staking/Staking";
import EggSell from "./Pages/EggSell/EggSell";
// ..............Pages ................End
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route exact={true} path="/" element={<Marketplace />}>
            </Route>
            <Route path="/staking" element={<Staking />}>
            </Route>
            <Route path="/egg_sell" element={<EggSell />}>
            </Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
