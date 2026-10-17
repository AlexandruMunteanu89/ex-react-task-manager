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


// 📌 Milestone 5 - Creazione del Form per Aggiungere un Task
// Creare un form per aggiungere un task, senza ancora inviare i dati all'API.


// Aggiornare la pagina AddTask.jsx per contenere un form con i seguenti campi:

// Nome del task (title) → Input controllato (useState).
// Descrizione (description) → Textarea non controllata (useRef).
// Stato (status) → Select non controllata (useRef), con opzioni "To do", "Doing", "Done", e valore predefinito "To do".

// Validare il campo Nome (title):

// Il campo non può essere vuoto.
// Non può contenere simboli speciali.
// Se il valore è errato, mostrare un messaggio di errore.
// Utilizzare una costante con i caratteri vietati:
// const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";
// Gestione del Submit del Form:

// Al click del bottone "Aggiungi Task", il form deve SOLO stampare in console l’oggetto task con i valori inseriti (NON deve ancora essere inviata la richiesta all’API).