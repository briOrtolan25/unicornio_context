import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnicornsModule from './unicorns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unicornios" element={<UnicornsModule />} />
      </Routes>
    </Router>
  );
}

export default App;
