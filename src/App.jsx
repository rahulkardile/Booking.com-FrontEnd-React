import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import './App.css'
import List from "./pages/List/List.jsx"
import Hotel from "./pages/Hotel/Hotel.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hotels" element={<List />} />
      <Route path="/Hotels/:id" element={<Hotel />} />

    </Routes>
    </BrowserRouter>    
  )
}

export default App
