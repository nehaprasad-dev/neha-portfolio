"use client";

import { useState } from "react";

export default function StatusIndicator() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="status-container">
      <button
        className="status-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="status-dot"></span>
        <span className="status-text">Status</span>
      </button>

      {isOpen && (
        <div className="status-dropdown">
          <div className="status-title">available_for</div>
          <div className="status-option">
            <span className="status-icon">□</span>
            <a href="#contact" className="status-link">
              Open to Full‑Time Opportunities
            </a>
          </div>
          <div className="status-option">
            <span className="status-icon">□</span>
            <a href="#contact" className="status-link">
              Seeking Frontend/Full‑Stack Roles
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
