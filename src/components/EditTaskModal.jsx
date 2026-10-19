import { useState, useRef } from "react";
import Modal from "./Modal";
import { Form } from "react-router-dom";

export default function EditTaskModal({ show, onClose, task, onSave }){
    const [editedTask, setEditedTask] = useState(task);
    const editFormRef = useRef();

    const changeEditedTask = (key, event) => {
        setEditedTask(prev => ({...prev, [key]: event.target.value}))
    }

    const { title, description, status } = editedTask;

    const handleSubmit = event => {
        event.preventDefault();
        onSave(editedTask);
    }

    return (
        <Modal
            title="Modifica Task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>
                        Nome Task:
                        <input
                            type='text'
                            value={title}
                            onChange={event => changeEditedTask('title', event)}
                        />
                    </label>
                    <label>
                        Descrizione:
                        <textarea
                            value={description}
                            onChange={event => changeEditedTask('description', event)}
                        />
                    </label>
                    <label>
                        Stato:
                        <select
                            value={status}
                            onChange={event => changeEditedTask('status', event)}
                        >
                                {["To do", "Doing", "Done"].map((value, index) => (<option key={index} value={value}>{value}</option>))}
                        </select>
                    </label>
                </form>
            }
            confirmText='Salva'
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    )

}


// 