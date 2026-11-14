import React from 'react';

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  color = '#16A085'
}) {
  return (
    <div className="dashboard-stat-card">

      <div className="dashboard-stat-header">
        <span>{title}</span>

        <div
          className="dashboard-stat-icon"
          style={{ color: color }}
        >
          {Icon && <Icon size={22} />}
        </div>
      </div>

      <h2>{value}</h2>

      <p>{description}</p>

    </div>
  );
}