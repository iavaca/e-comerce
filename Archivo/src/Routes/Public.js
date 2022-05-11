
import '../App.css';
import Home from '../Pages/Home';
import Formulario from '../Pages/Formulario';
import Detalle from '../Components/Detalle';
import Notfound from '../Pages/Notfound';
import Registro from '../Pages/Registro'
import {Routes,Route} from 'react-router-dom'


function Public() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/registro' element={<Formulario />}/>
          <Route path='/producto/:id' element={<Detalle />}/>
          <Route path='/login' element={<Registro />}/>
          <Route path='*' element={<Notfound />}/>

        </Routes>
      
       
      </header>
    </div>
  );
}

export default Public;
