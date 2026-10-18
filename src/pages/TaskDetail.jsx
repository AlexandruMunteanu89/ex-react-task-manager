import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Modal from "../components/Modal";

export default function TaskDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    if(!task){
        return (
            <h2>Task non trovata</h2>
        )
    }

    const handleDelete = async () => {
        try{
            await removeTask(task.id);
            alert("Task eliminata con successo!");
            navigate("/");
        }catch(error){
            console.error(error);
            alert(error.message);
            
        }
        
    }

    return(
        <div>
            <h1>Dettaglio Task</h1>
            <p><strong>Name:</strong> {task.title}</p>
            <p><strong>Descrizione:</strong> {task.description}</p>
            <p><strong>Stato:</strong> {task.status}</p>
            <p><strong>Data di Creazione:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>
            <button className="btn-elimina" onClick={() => setShowDeleteModal(true)}>Elimina Task</button>
        
        {/* Modale di conferma eliminazione */}
        <Modal
                title="Conferma"
                content={<p>Sei sicuro di voler eliminate la task</p>}
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />
        </div>
    );
}

// Integrare il componente Modal in TaskDetail.jsx per confermare l'eliminazione:
// Quando l’utente clicca su "Elimina Task", deve aprirsi la modale di conferma.
// Se l’utente conferma, vengono eseguite le stesse operazioni della Milestone 8