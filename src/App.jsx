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
          <Route path="/addtask" element={<AddTask/>}/>
        </Routes>

      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App


// 📌 Milestone 6 - Integrazione dell'API per Aggiungere un Task (POST)
// Collegare il form di AddTask all'API e completare la funzione addTask in useTasks().


// Completare la funzione addTask in useTasks():
//La funzione deve ricevere un oggetto contenente le proprietà title, description e status.

// Effettuare una chiamata API POST /tasks, inviando l’oggetto come body in formato JSON.

// La chiamata API restituisce un oggetto con la seguente struttura:

// In caso di successo:

// { success: true, task: /* la task creata */ }
// In caso di errore:

// { success: false, message: "Messaggio di errore" }
// La funzione addTask deve controllare il valore di success nella risposta:

// Se success è true, aggiornare lo stato globale aggiungendo la nuova task.
// Se success è false, lanciare un errore con message come testo.

// Modificare la gestione del Submit del Form in AddTask.jsx:
// Eseguire la funzione addTask di useTasks(), passando l’oggetto con title, description e status.
// Se la funzione esegue correttamente l'operazione:
// Mostrare un alert di conferma dell’avvenuta creazione della task.
// Resettare il form.
// Se la funzione lancia un errore:
// Mostrare un alert con il messaggio di errore ricevuto.