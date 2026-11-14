import React from 'react';

// Componente original de indicadores
export default function StatCard({
  label,
  value,
  change,
  icon,
  tone
}) {
  return (
    <article className="stat-card">

      <div className="stat-top">

        <span>{label}</span>

        <span className={`stat-icon ${tone}`}>
          {icon}
        </span>

      </div>

      <strong>{value}</strong>

      <small>{change}</small>

    </article>
  );
}