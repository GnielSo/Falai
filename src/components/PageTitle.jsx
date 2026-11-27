/*import React from 'react';
export default function PageTitle({ eyebrow, title, description, action }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <div className="heading-action">{action}</div>}</div>;
}
*/
import React from 'react';

// ======================================================
// FALAI - COMPONENTE DE TÍTULO DAS PÁGINAS
// ======================================================

export default function PageTitle({
  eyebrow,
  title,
  description,
  action,
  icon: Icon
}) {

  return (

    <header className="falai-page-title">

      {/* Conteúdo principal do cabeçalho */}

      <div className="falai-page-title__main">

        {/* Ícone opcional */}

        {Icon && (

          <div
            className="falai-page-title__icon"
            aria-hidden="true"
          >

            <Icon
              size={26}
              strokeWidth={1.8}
            />

          </div>

        )}


        {/* Identificação da página */}

        <div className="falai-page-title__content">

          {/* Categoria ou identificação da seção */}

          {eyebrow && (

            <span className="falai-page-title__eyebrow">

              {eyebrow}

            </span>

          )}


          {/* Título principal */}

          <h1 className="falai-page-title__heading">

            {title}

          </h1>


          {/* Descrição da página */}

          {description && (

            <p className="falai-page-title__description">

              {description}

            </p>

          )}

        </div>

      </div>


      {/* Botão ou ação complementar */}

      {action && (

        <div className="falai-page-title__action">

          {action}

        </div>

      )}

    </header>

  );

}