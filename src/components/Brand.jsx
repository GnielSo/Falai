/*
import React from 'react';
export default function Brand({ compact = false }) {
  return <div className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="FALAI">
    <span className="brand-mark">F</span><span className="brand-word">FAL<span>AI</span></span>
  </div>;
}
*/

import React from 'react';

// ======================================================
// COMPONENTE DE IDENTIDADE VISUAL DO FALAI
// ======================================================

export default function Brand({
  compact = false,
  showSubtitle = true,
  onClick
}) {

  // Define as classes do componente
  const brandClass = [
    'falai-brand',
    compact ? 'falai-brand--compact' : ''
  ].filter(Boolean).join(' ');


  // Conteúdo visual da marca
  const content = (
    <>

      {/* Símbolo da marca */}

      <div
        className="falai-brand__symbol"
        aria-hidden="true"
      >

        <svg
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >

          {/* Marcador de localização */}

          <path
            d="M28 10
               C18 10 13 17 13 25
               C13 36 28 47 28 47
               C28 47 43 36 43 25
               C43 17 38 10 28 10Z"
            stroke="currentColor"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Balão de comunicação */}

          <path
            d="M20 20
               H36
               V29
               H28
               L23 33
               V29
               H20Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Pontos do balão */}

          <circle
            cx="24"
            cy="24.5"
            r="1.1"
            className="falai-brand__dot"
          />

          <circle
            cx="28"
            cy="24.5"
            r="1.1"
            className="falai-brand__dot"
          />

          <circle
            cx="32"
            cy="24.5"
            r="1.1"
            className="falai-brand__dot"
          />

        </svg>

      </div>


      {/* Nome e descrição da marca */}

      {!compact && (

        <div className="falai-brand__identity">

          <span className="falai-brand__name">

            FAL<span>AI</span>

          </span>

          {showSubtitle && (

            <span className="falai-brand__subtitle">

              Participação cidadã

            </span>

          )}

        </div>

      )}

    </>
  );


  // Caso a marca possua uma ação de navegação,
  // utiliza um botão acessível.

  if (typeof onClick === 'function') {

    return (

      <button
        type="button"
        className={`${brandClass} falai-brand--interactive`}
        onClick={onClick}
        aria-label="FALAI — Ir para a página inicial"
      >

        {content}

      </button>

    );

  }


  // Caso contrário, apresenta somente a marca.

  return (

    <div
      className={brandClass}
      role="img"
      aria-label="FALAI — Participação cidadã"
    >

      {content}

    </div>

  );

}