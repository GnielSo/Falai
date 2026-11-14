import React from 'react';
export default function Brand({ compact = false }) {
  return <div className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="FALAI">
    <span className="brand-mark">F</span><span className="brand-word">FAL<span>AI</span></span>
  </div>;
}
