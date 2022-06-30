import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Channel from './components/Channel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> 
          <Route path='/' element = {<Home />} />
          <Route path='/Channel/:id' element={<Channel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
