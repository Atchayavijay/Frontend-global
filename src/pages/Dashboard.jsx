
import React, { useState, useEffect } from 'react';
import AddNoteModal from '../components/AddNoteModal';


const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const handleAddNote = (newNote) => {
    const updated = [...notes, newNote];
    setNotes(updated);
    localStorage.setItem('notes', JSON.stringify(updated));
    setShowModal(false);
  };

  return (
    <div className="dashboard">
      <h2 className="greeting">Good Morning Deva!</h2>

      <div className="notes-area">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <h4>{note.title}</h4>
            <p>{note.content}</p>
          </div>
        ))}
      </div>

      <button className="add-button" onClick={() => setShowModal(true)}>+</button>

      {showModal && (
        <AddNoteModal
          onAdd={handleAddNote}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
