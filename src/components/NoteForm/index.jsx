import { useState } from "react";

export default function NoteForm ({addNote}) {
    const [newNote, setNewNote] = useState('');
    const _handleSubmit = (e) => {
        e.preventDefault();
        addNote(newNote);
        setNewNote('');
    }
    return (
        <form onSubmit={ _handleSubmit }>
            <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)}></textarea>
            <button>Add note</button>
        </form>
    );
}