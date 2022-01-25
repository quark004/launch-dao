import { Provider, defaultChains } from "wagmi";
import "./App.css";
import Home from "./Components/Home/Home";

import { InjectedConnector } from "wagmi/connectors/injected";
import Dao from "./Components/DAO/Dao";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create/Create";
import Data from "./Components/Data";
const chains = defaultChains;

// Set up connectors
const connectors = ({ chainId }) => {
  return [new InjectedConnector({ chains })];
};
function App() {
  return (
    <Provider autoConnect connectors={connectors}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Home />} />
            <Route path="/dao/:tokenAddress" element={<Dao />} />
            <Route path="/create-dao" element={<Create />} />
            // <Route path="/dao" element={<Dao />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
