import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/Add.Task"
import TaskDetail from "./pages/TaskDetail"
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
          <Route path="/addtask" element={<AddTask/>}/>
          <Route path="/task/:id" element={<TaskDetail/>}/>
        </Routes>

      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App



// 📌 Milestone 11 - Ordinamento delle Task
// Implementare un sistema di ordinamento nella tabella delle task, permettendo all'utente di ordinare i task in base a diversi criteri.


// Aggiungere due state in TaskList.jsx:
// sortBy: rappresenta il criterio di ordinamento (title, status, createdAt).
// sortOrder: rappresenta la direzione (1 per crescente, -1 per decrescente).
// Il default di sortBy è createdAt, il default di sortOrder, è 1.

// Modificare la tabella per rendere cliccabili le intestazioni (th), in modo che al click:
// Se la colonna è già selezionata (sortBy uguale alla colonna cliccata), invertire sortOrder.
// Se la colonna è diversa, impostare sortBy sulla nuova colonna e sortOrder su 1.

// Implementare la logica di ordinamento con useMemo(), in modo che l’array ordinato venga ricalcolato solo quando cambiano tasks, sortBy o sortOrder:
// Ordinamento per title → alfabetico (localeCompare).
// Ordinamento per status → ordine predefinito: "To do" < "Doing" < "Done".
// Ordinamento per createdAt → confrontando il valore numerico della data (.getTime()).
// Applicare sortOrder per definire se l’ordine è crescente o decrescente.