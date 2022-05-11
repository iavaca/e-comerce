
import '../App.css';
import Home from '../Pages/Home';
import Formulario from '../Pages/Formulario';
import Detalle from '../Components/Detalle';
import Notfound from '../Pages/Notfound';
import Registro from '../Pages/Registro'
import {Routes,Route} from 'react-router-dom'
import ProductosAlta from '../Pages/Productos.alta';
import ProductosModificar from '../Pages/Productos.Modificar';


function Public() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registro' element={<Formulario />}/>
          <Route path='/producto/:id' element={<Detalle />}/>
          <Route path='/login' element={<Registro />}/>
          <Route path='/producto/modificar/:id' element={<ProductosModificar />}/>
        
          <Route path='productos/alta' element={<ProductosAlta />}/>
          <Route path='*' element={<Notfound />}/>

        </Routes>
      
       
      </header>
    </div>
  );
}

export default Public;
