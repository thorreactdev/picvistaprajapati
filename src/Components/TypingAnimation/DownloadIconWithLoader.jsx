import React, { useState } from 'react';

const DownloadIconWithLoader = ({ onClick, load, className }) => {
  return (
    <a className={`download-icon ${className}`} onClick={onClick}>
      {load ? (
        <div className="animate-spin2"></div>
      ) : (
        <i className='bx bx-download animate-bounce'></i>
      )}
    </a>
  );
};

export default DownloadIconWithLoader;
