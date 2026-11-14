import React from 'react';

// Componente reutilizável de botão
export default function Button({
  children,
  variant = 'primary',
  ...props
}) {
  return (
    <button
      className={`button button-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}