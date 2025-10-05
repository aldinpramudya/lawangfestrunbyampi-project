import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Event from './pages/Event';


import './App.css'

function App() {

  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <Home />
      <Event />
    </div>
  )
}

export default App
