
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DynamicGraph from './pages/DynamicGraph';
import Home from './pages/Home';
function App() {
  return (

    <div className="App">


              <BrowserRouter>
              <Navbar/>
                <Routes>
                  <Route path="/" element={ <Home/>}/>
                  <Route path="visualization" element={ <DynamicGraph/>}/>

                </Routes>
              </BrowserRouter>

                {/* <Navbar/> */}
               
                {/* <DynamicGraph/> */}
    </div>
  
  );
}

export default App;
