import React, { useState } from 'react';
import './Modal.css'; // Import the CSS styles for the modal

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={toggleModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Modal Content</h2>
            <p>This is a modal created using CSS and JSX in React.</p>
            <button className="close-modal-btn" onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
