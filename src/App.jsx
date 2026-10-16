import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/add" element={<AddTask/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App


// Impostiamo il frontend:

// Creiamo il progetto con Vite.
// Installiamo react-router-dom nel progetto.
// Creiamo il router principale in App.jsx utilizzando BrowserRouter.