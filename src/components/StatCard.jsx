import React from 'react';

import {
  ChartNoAxesColumn,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

// ======================================================
// 1. CONFIGURAÇÃO DAS CORES
// ======================================================

const TONES = {
  blue: '#2563EB',
  amber: '#B45309',
  violet: '#7C3AED',
  green: '#087F69',
  red: '#B91C1C',
  orange: '#C2410C',
  neutral: '#64748B'
};


// ======================================================
// 2. CONFIGURAÇÃO DAS TENDÊNCIAS
// ======================================================

const TRENDS = {

  up: {
    icon: TrendingUp,
    label: 'Aumento'
  },

  down: {
    icon: TrendingDown,
    label: 'Redução'
  },

  neutral: {
    icon: Minus,
    label: 'Estabilidade'
  }

};


// ======================================================
// 3. COMPONENTE STATCARD
// ======================================================

export default function StatCard({

  title,
  label,
  value,
  description,
  change,

  icon,
  color,
  tone = 'green',

  trend,
  trendValue,
  trendLabel,
  trendTone = 'neutral',

  loading = false

}) {

  // Compatibilidade com as propriedades antigas

  const cardTitle = title ?? label ?? 'Indicador';

  const cardDescription = description ?? change;


  // Define a cor principal

  const cardColor = color || TONES[tone] || TONES.green;


  // Define o ícone

  const CardIcon = icon ?? ChartNoAxesColumn;


  // Define a tendência

  const currentTrend = TRENDS[trend] || TRENDS.neutral;

  const TrendIcon = currentTrend.icon;

  const validTrendTone = ['positive', 'negative', 'neutral']
    .includes(trendTone)
      ? trendTone
      : 'neutral';


  // Formata valores numéricos

  const formattedValue = typeof value === 'number'
    ? new Intl.NumberFormat('pt-BR').format(value)
    : value ?? '—';


  return (

    <article
      className="falai-stat-card"
      style={{ '--stat-accent': cardColor }}
      aria-busy={loading}
    >

      {/* ==============================================
          CABEÇALHO DO CARD
      ============================================== */}

      <div className="falai-stat-card__header">

        <h3 className="falai-stat-card__title">

          {cardTitle}

        </h3>


        {/* Compatibilidade com ícones antigos e novos */}

        <div
          className="falai-stat-card__icon"
          aria-hidden="true"
        >

          {typeof CardIcon === 'string' ||
           typeof CardIcon === 'number' ? (

            CardIcon

          ) : React.isValidElement(CardIcon) ? (

            CardIcon

          ) : (

            <CardIcon
              size={23}
              strokeWidth={1.8}
            />

          )}

        </div>

      </div>


      {/* ==============================================
          ESTADO DE CARREGAMENTO
      ============================================== */}

      {loading ? (

        <div className="falai-stat-card__loading">

          <span className="falai-stat-card__sr-only">
            Carregando indicador
          </span>

          <div
            className="falai-stat-card__skeleton skeleton-value"
            aria-hidden="true"
          />

          <div
            className="falai-stat-card__skeleton skeleton-description"
            aria-hidden="true"
          />

        </div>

      ) : (

        <>

          {/* VALOR PRINCIPAL */}

          <div className="falai-stat-card__value">

            {formattedValue}

          </div>


          {/* INDICADOR DE TENDÊNCIA */}

          {trendValue != null && (

            <div className="falai-stat-card__trend-row">

              <span
                className={
                  `falai-stat-card__trend
                   falai-stat-card__trend--${validTrendTone}`
                }
              >

                <TrendIcon
                  size={15}
                  aria-hidden="true"
                />

                <span className="falai-stat-card__sr-only">
                  {currentTrend.label}:
                </span>

                {trendValue}

              </span>

              {trendLabel && (

                <span className="falai-stat-card__trend-label">

                  {trendLabel}

                </span>

              )}

            </div>

          )}


          {/* DESCRIÇÃO COMPLEMENTAR */}

          {cardDescription && (

            <p className="falai-stat-card__description">

              {cardDescription}

            </p>

          )}

        </>

      )}

    </article>

  );

}