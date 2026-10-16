import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/Add.Task"
import './index.css'

function App() {
  

  return (
    <BrowserRouter>
      <nav>
          <NavLink to="/">Task List</NavLink>
          <NavLink to="/addtask">Add Task</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/add" element={<AddTask/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App


// Definiamo due pagine principali:

// Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
// Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task.
// Aggiungere una barra di navigazione con NavLink, per permettere all'utente di spostarsi tra le pagine.

// Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina.