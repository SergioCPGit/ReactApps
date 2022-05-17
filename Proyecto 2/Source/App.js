
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas'
import logo from '../src/imagenes/logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
     
      <div className='logo-contenedor'>
        <h1>App Tareas</h1>
        <img 
          src={logo} 
          className='logo'
          alt='logoApp'
         />
      </div>
      <div className='tareas-lista-principal'>
        <h1 className='titulo-lista'>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
      
      
    </div>
  );
}

export default App;
