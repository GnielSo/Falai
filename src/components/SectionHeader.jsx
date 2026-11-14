import React from 'react';

// Cabeçalho reutilizável das seções
export default function SectionHeader({
  title,
  action,
  onAction
}) {
  return (
    <div className="section-header">

      <h2>{title}</h2>

      {action && (
        <button
          className="text-action"
          onClick={onAction}
        >
          {action} <span>→</span>
        </button>
      )}

    </div>
  );
}