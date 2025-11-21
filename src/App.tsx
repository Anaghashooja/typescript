 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Exercise from './pages/exercise'
import Admission from './pages/admission'

function App() { return(<>
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/admission" element={<Admission />} />
         
      </Routes>
    </Router>
    </>
  )
}

export default App
