

import React, { useState, useEffect } from 'react';

export default function NotesApp() {
  // Load initial notes from local storage or default to empty array
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('react-text-notes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [inputText, setInputText] = useState('');

  // Sync state changes directly to localStorage
  useEffect(() => {
    localStorage.setItem('react-text-notes', JSON.stringify(notes));
  }, [notes]);

  // Handle adding new text notes
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    console.log(!inputText.trim());

    const newNote = {
      id: crypto.randomUUID(),
      text: inputText,
      date: new Date().toLocaleDateString()
    };

    setNotes([newNote, ...notes]);
    setInputText('');
  };

  // Handle removing a specific note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '0 10px', fontFamily: 'sans-serif' }}>
      <h2>ReactJS Text Notes</h2>
      
      {/* Form Submission Layout */}
      <form onSubmit={handleAddNote} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a new text note..." 
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add
        </button>
      </form>

      {/* Rendered Notes List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {notes.length === 0 ? <p>No notes available. Add one above!</p> : null}
        {notes.map(note => (
          <div key={note.id} style={{ padding: '15px', border: '1px solid #eaeaea', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fafafa' }}>
            <div>
              <p style={{ margin: '0 0 5px 0' }}>{note.text}</p>
              <small style={{ color: '#666' }}>{note.date}</small>
            </div>
            <button onClick={() => handleDeleteNote(note.id)} style={{ background: 'none', border: 'none', color: '#ff0000', cursor: 'pointer', fontSize: '16px' }}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

