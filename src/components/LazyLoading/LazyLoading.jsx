import React from 'react';
import './LazyLoading.scss';

const LazyLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <svg
          className="loading-spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="spinner-circle"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="spinner-path"
            fill="currentColor"
            d="M4 12a8 8 0 018-8 8 8 0 018 8H4z"
          />
        </svg>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LazyLoading;
