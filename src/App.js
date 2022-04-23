import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";

// ..............Pages ................
import Marketplace from "./Pages/Marketplace";
// ..............Pages ................End
function App() {
  return (
    <div className="App">
      <Base>
        <Marketplace></Marketplace>
      </Base>
    </div>
  );
}

export default App;
