
import './App.css';
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Kanbas from "./Kanbas"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <p>Oceane Kenfack Tonfack, Section 61065</p>
      <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
