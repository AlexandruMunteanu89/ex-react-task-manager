import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/Add.Task"
import { GlobalProvider } from "./context/GlobalContext"
import './index.css'

function App() {
  

  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}

export default App


// Milestone 4 - Creazione del Custom Hook useTasks() (GET)
// Creare un custom hook per centralizzare la gestione dei task e semplificare l'accesso ai dati.


// Creare un hook useTasks() che recupera i task iniziali con una richiesta GET a /tasks e li memorizza in uno stato locale (useState).

// Definire le funzioni addTask, removeTask, updateTask all'interno di useTasks(), lasciandole vuote per ora.

// Rendere disponibili le funzioni e la lista dei task restituendole come valore dell'hook.

// Integrare useTasks() nel GlobalContext, in modo che tutti i componenti possano accedere ai task e alle funzioni di gestione.