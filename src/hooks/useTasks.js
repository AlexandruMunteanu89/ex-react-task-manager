import { useState, useEffect } from "react";
const { VITE_API_URL } = import.meta.env;

export default function useTasks(){

const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(error => console.error(error));
    }, []);

    const AddTask = async newTask => {
        const response = await fetch(`${VITE_API_URL}/tasks`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newTask)
        });
        const { success, message, task } = await response.json();
        if(!success) throw new Error(message);

        setTasks(prev => [...prev, task]);

    }

    const removeTask = async taskId => {
        const response = await fetch(`${VITE_API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        });
        const { success, message} = await response.json();
        if(!success) throw new Error(message);
        
        setTasks(prev => prev.filter(t => t.id !== taskId));
    }

    const updateTask = (updateTask) => {
        // Effettuare le operazioni
    }

return { tasks, AddTask, removeTask, updateTask }
}


// // Milestone 8 - Funzione di Eliminazione Task (DELETE)
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