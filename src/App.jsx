import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UnicornsContainer from "./unicorns";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal de unicornios */}
        <Route path="/unicornios" element={<UnicornsContainer />} />

        {/* Ruta raíz redirige a /unicornios */}
        <Route path="*" element={<Navigate to="/unicornios" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
