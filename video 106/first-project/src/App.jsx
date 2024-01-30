import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
// import "./App.css"
 

function App() {
 
  return (
    <> 
      <Navbar />
      <div className="cards">
        <Card title="Card 1" description="Lorem ipsum dolor sit amet." />
        <Card title="Card 2" description="Lorem ipsum dolor sit amet." />
        <Card title="Card 3" description="Lorem ipsum dolor sit amet." />
        <Card title="Card 4" description="Lorem ipsum dolor sit amet." />
      </div>
      <Footer />
    </>
  )
}

export default App
