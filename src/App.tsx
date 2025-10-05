import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Event from './pages/Event';
import RouteSchedule from "./pages/RouteSchedule";
import Registration from "./pages/Registration";
import TechnicalInstruction from "./pages/TechnicalInstruction";
import Contact from "./pages/Contact";


import './App.css'

function App() {

  return (
    <div className='min-h-screen overflow-hidden'>
      <Navbar />
      <main>
        <Home />
        <Event />
        <RouteSchedule />
        <Registration />
        <TechnicalInstruction />
        <Contact />
      </main>
    </div>
  )
}

export default App
