import { createPortal } from 'react-dom'

export default function Modal({ title, content, show, onClose, onConfirm, confirmText = "Conferma"}){

    if(!show) return null;
    
    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>{title}</h2>
                {content}
                <div className="modal-action">
                    <button className="btn btn-info" onClick={onClose}>Annulla</button>
                    <button className="btn btn-info m-1" onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body
    )
}

