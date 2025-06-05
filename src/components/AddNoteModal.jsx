// src/components/AddNoteModal.jsx
import React, { useState } from 'react';


const AddNoteModal = ({ onAdd, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <input
          type="text"
          placeholder="Note title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="4"
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="add-btn" onClick={handleSubmit}>Add</button>
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;
