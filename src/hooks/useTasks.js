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
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
    method: 'DELETE'
  });
  const { success, message } = await response.json();
  if(!success) throw new Error(message);

  setTasks(prev => prev.filter(t => t.id != taskId));
}

    const updateTask = async updateTask => {
         const response = await fetch(`${VITE_API_URL}/tasks/${updateTask.id}`, {
            method: 'PuT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(updateTask)
        });
        const { success, message, task: newTask } = await response.json();
        if(!success) throw new Error(message);

        setTasks(prev => prev.map(
            oldTask => oldTask.id === newTask.id ? newTask : oldTask));

    }

return { tasks, AddTask, removeTask, updateTask }
}


// Milestone 10 - Modale e Funzione di Modifica Task (PUT)
// Creare una modale per modificare i dettagli di un task e aggiornare i dati tramite API.


// Completare la funzione updateTask in useTasks():

// La funzione deve ricevere un oggetto updatedTask e effettuare una chiamata API PUT /tasks/:id.

// La chiamata API restituisce un oggetto con la seguente struttura:

// In caso di successo:

// { success: true, task: /* la task aggiornata */ }
// In caso di errore:

// { success: false, message: "Messaggio di errore" }
// La funzione updateTask deve controllare il valore di success nella risposta:

// Se success è true, aggiornare la task nello stato globale.
// Se success è false, lanciare un errore con message come testo.

