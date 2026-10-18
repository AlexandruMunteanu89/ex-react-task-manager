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


// Milestone 8 - Funzione di Eliminazione Task (DELETE)
// Aggiungere la funzionalità di eliminazione di un task con una chiamata API e aggiornare lo stato.


// Completare la funzione removeTask in useTasks():
// La funzione deve ricevere un taskId e effettuare una chiamata API DELETE /tasks/:id.

// La chiamata API restituisce un oggetto con la seguente struttura:

// In caso di successo:

// { success: true }
// In caso di errore:

// { success: false, message: "Messaggio di errore" }
// La funzione removeTask deve controllare il valore di success nella risposta:

// Se success è true, rimuovere il task dallo stato globale.
// Se success è false, lanciare un errore con message come testo.

// Gestire l'eliminazione della task in TaskDetail.jsx:
// Al click su "Elimina Task", chiamare removeTask passando l'id del task.
// Se la funzione esegue correttamente l'operazione:
// Mostrare un alert di conferma dell’avvenuta eliminazione.
// Reindirizzare l’utente alla lista dei task (/).
// Se la funzione lancia un errore:
// Mostrare un alert con il messaggio di errore ricevuto.