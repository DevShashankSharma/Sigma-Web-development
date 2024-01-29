import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar LogoText='CWS'/>  
      <div className='counter'>{count}</div> 
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
