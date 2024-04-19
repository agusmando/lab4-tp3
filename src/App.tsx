import React from 'react';
import ListaInstrumentos from './components/ListaInstrumentos';
import datos from './data/datos';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      <ListaInstrumentos instrumentos={datos}/>
    </div>
  );
};

export default App;
