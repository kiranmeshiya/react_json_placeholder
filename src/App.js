
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './componant/Home';
import Single from './componant/Single'
function App() {
  return (
    <>
       <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Post/:id' element={<Single/>}/>
        
      </Routes>
    </>
  );
}

export default App;
