import Navbar from './components/Navbar';
import Contenedor from './components/Contenedor';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Contenedor mensaje="¡Bienvenidos a la Pizzería de Andrea!" />
    </div>
  );
}

export default App;
