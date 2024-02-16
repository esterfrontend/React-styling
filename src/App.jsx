import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Home1 from "./pages/Home1/Home1"
import Home2 from "./pages/Home2/Home2"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home2 />
      <Footer />
    </div>
  )
}

export default App
