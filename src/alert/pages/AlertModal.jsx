import React, { useState } from 'react';
import './AlertModal.css'

const ICONS = {
  error: '/error_icon.svg',
  warning: '/warning_icon.svg',
};

export const AlertModal = ({ isOpen, handleClose, type, message }) => {

  if (!isOpen) return null;
  const icon = ICONS[type] || '/error_icon.svg';
  return (
    <div className='modal-alert'>
      <div className="image" style={
        {
          backgroundImage: `url(${icon})`
        }
      } />
      <p>{message}</p>
      <button className="button form-button" onClick={handleClose}>Cerrar</button>
    </div >
  );
}