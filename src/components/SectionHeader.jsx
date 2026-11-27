/*
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
*/

import React from 'react';
import { ArrowRight } from 'lucide-react';

// ======================================================
// FALAI - CABEÇALHO DAS SEÇÕES
// ======================================================

export default function SectionHeader({

  title,
  description,
  eyebrow,
  action,
  onAction,
  icon: Icon,
  actionIcon: ActionIcon = ArrowRight,
  showDivider = true,
  showActionIcon = true

}) {

  // Define as classes do componente

  const headerClass = [

    'falai-section-header',

    showDivider
      ? 'falai-section-header--divider'
      : ''

  ].filter(Boolean).join(' ');


  return (

    <header className={headerClass}>

      {/* Conteúdo principal */}

      <div className="falai-section-header__main">

        {/* Ícone opcional da seção */}

        {Icon && (

          <div
            className="falai-section-header__icon"
            aria-hidden="true"
          >

            <Icon
              size={22}
              strokeWidth={1.8}
              focusable="false"
            />

          </div>

        )}


        {/* Informações da seção */}

        <div className="falai-section-header__content">

          {/* Identificação complementar */}

          {eyebrow && (

            <span className="falai-section-header__eyebrow">

              {eyebrow}

            </span>

          )}


          {/* Título da seção */}

          <h2 className="falai-section-header__title">

            {title}

          </h2>


          {/* Descrição opcional */}

          {description && (

            <p className="falai-section-header__description">

              {description}

            </p>

          )}

        </div>

      </div>


      {/* Botão de ação opcional */}

      {action && typeof onAction === 'function' && (

        <button
          type="button"
          className="falai-section-header__action"
          onClick={onAction}
        >

          <span>{action}</span>

          {showActionIcon && ActionIcon && (

            <ActionIcon
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              focusable="false"
            />

          )}

        </button>

      )}

    </header>

  );

}