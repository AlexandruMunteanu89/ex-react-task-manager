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


// 📌 Milestone 3 - Lista dei Task (Pagina)
// Visualizzare l'elenco dei task in una tabella e ottimizzare il rendering con React.memo().


// Recuperare la lista dei task dal GlobalContext e mostrarla nella pagina TaskList.jsx.

// Strutturare TaskList.jsx come una tabella, con le intestazioni Nome, Stato, Data di Creazione.

// Creare un componente TaskRow.jsx, che rappresenta una singola riga della tabella e mostra solo le proprietà title, status e createdAt (escludendo description).

// Applicare uno stile differente alla colonna status, assegnando i seguenti colori di sfondo alle celle in base al valore dello stato:
// "To do" → rosso
// "Doing" → giallo
// "Done" → verde

// Utilizzare React.memo() su TaskRow.jsx per ottimizzare le prestazioni ed evitare render inutili.