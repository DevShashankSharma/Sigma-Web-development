import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setcolor] = useState(0)

  // Case 1 : Run on every render -
  useEffect(() => {
     alert('hello3')
  })

  // Case 2 : Run only on first render
  useEffect(() => {
     alert('hello')
  }, [])

  // Case 3 : Run only when certain value change
  useEffect(() => {
     alert('Count was changed')
     setcolor(color + 1)
  }, [count])

  useEffect(() => {
     alert('first was changed')
  }, [first])

  
  
  

  return (
    <>
      <Navbar color={"red " + "Cyan" + color}/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
