import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import Contenedor from './components/contenedor/contenedor';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contenedor saludo={'Hola Mundo'}/>

    </div>
  );
}

export default App;
