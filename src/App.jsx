import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post/:id' element={<Post/>}/>
    </Routes>
    </div>
  );
}

export default App;
