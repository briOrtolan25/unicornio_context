import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"> Bienvenido</h1>
      <Link to="/unicornios" className="p-button p-button-primary">
        Ir a la gestión de Unicornios
      </Link>
    </div>
  );
};

export default App;

