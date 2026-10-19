import { useContext, useMemo, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import TaskRow from "../components/TaskRow.jsx";

export default function TaskList(){

const {tasks} = useContext(GlobalContext);
console.log('Tasks:', tasks);

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

const sortedTask = useMemo(() => {
    return [...tasks].sort((a, b) => {
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
},[tasks, sortBy, sortOrder]);

    return (
        <div>
            <h1>Lista delle Task</h1>
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
                    {sortedTask.map(task => (
                        <TaskRow key={task.id} task={task}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

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
