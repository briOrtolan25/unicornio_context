import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnicornsModule from './unicorns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unicornios" element={<UnicornsModule />} />
        {/* Otras rutas que ya tengas */}
      </Routes>
    </Router>
  );
}

export default App;
