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

    const removeTask = (taskId) => {
        //Effettuare le operazioni
    }

    const updateTask = (updateTask) => {
        // Effettuare le operazioni
    }

return { tasks, AddTask, removeTask, updateTask }
}


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