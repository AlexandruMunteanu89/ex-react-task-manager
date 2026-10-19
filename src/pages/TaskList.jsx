import { useCallback, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow.jsx";

//Funzione di debounce generica
function debounce(callback, delay){
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function TaskList(){

const {tasks} = useContext(GlobalContext);
console.log('Tasks:', tasks);

const [searchQuery, setSearchQuery] = useState("");
const debouncedSetSearchQuery = useCallback(
    debounce(setSearchQuery, 500)
, []);

const [sortBy, setSortBy] = useState('createdAt');
const [sortOrder, setSortOrder] = useState(1);

const sortIcon = sortOrder === 1 ? "↓" : "↑";

const handleSort = (field) => {
    if(sortBy === field){
        setSortOrder(prev => prev * -1)
    }else{
        setSortBy(field);
        setSortOrder(1);
    }
}

const filteredAtSortedTasks = useMemo(() => {
    return [...tasks]
    .filter(t => t.title.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
        let comparison;
        
        if(sortBy === 'title'){
            comparison = a.title.localeCompare(b.title)
        }else if(sortBy === 'status'){
            const statusOptions = ["To do", "Doing", "Done"];
            const indexA = statusOptions.indexOf(a.status);
            const indexB = statusOptions.indexOf(b.status);
            comparison = indexA - indexB; 
        }else if(sortBy === 'createdAt'){
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            comparison = dateA - dateB;
        }
        return comparison * sortOrder;
    });
},[tasks, sortBy, sortOrder, searchQuery]);

    return (
        <div>
            <h1>Lista delle Task</h1>
            {/* Input di ricerca */}
            <input 
                type="text" 
                placeholder='Cerca una task...'
                onChange={e => debouncedSetSearchQuery(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>
                            Nome {sortBy === "title" && sortIcon}
                        </th>
                        <th onClick={() => handleSort('status')}>
                            Status {sortBy === "status" && sortIcon}
                        </th>
                        <th onClick={() => handleSort('createdAt')}>
                            Data di Creazione {sortBy === "createdAt" && sortIcon}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAtSortedTasks.map(task => (
                        <TaskRow key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Creare un input di ricerca controllato
// Aggiungere un input di ricerca controllato in TaskList.jsx sopra la tabella, in modo che l’utente possa digitare per cercare un task.
// Creare uno stato searchQuery (useState) per memorizzare il valore dell'input.

// Modificare l'useMemo() per filtrare e ordinare i task
// Applicare il filtraggio basato su searchQuery.
// La ricerca deve essere case insensitive.
// Ordinare i risultati in base ai criteri esistenti (es. nome, stato, data di creazione).

// Aggiungere il debounce per migliorare le prestazioni
// Creare una funzione debounce con setTimeout() per ritardare l’aggiornamento di searchQuery.

// Usare useCallback() per memorizzare la funzione di debounce e prevenire inutili ricalcoli.