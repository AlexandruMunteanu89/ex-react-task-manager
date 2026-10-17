import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {

    const statusClassName = task.status.replace(" ", "").toLowerCase();
    return(
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={statusClassName}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
});

export default TaskRow;

// Aggiornare TaskRow.jsx
// Rendere il title un link a /task/:id, in modo che cliccando sul nome del task si venga reindirizzati alla pagina di dettaglio.

// Aggiornare App.jsx per aggiungere la rotta TaskDetail.jsx
// Aggiungere la rotta /task/:id che caricherà il componente TaskDetail.jsx.

// Creare TaskDetail.jsx per mostrare:
// Nome (title)
// Descrizione (description)
// Stato (status)
// Data di creazione (createdAt)
// Un bottone "Elimina Task", che per ora stampa solo "Elimino task" in console.