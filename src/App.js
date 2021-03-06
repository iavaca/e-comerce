
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'
import Menu from './Components/Menu';
import Public from './Routes/Public';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Menu />
          <Container>
          <Public />
          </Container>
          

        </Router>

      </header>
    </div>
  );
}

export default App;
