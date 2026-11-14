import React from 'react';
import { LoaderCircle } from 'lucide-react';

// ======================================================
// 1. VARIANTES DISPONÍVEIS
// ======================================================

const VARIANTS = [
  'primary',
  'secondary',
  'outline',
  'danger',
  'ghost'
];

// ======================================================
// 2. TAMANHOS DISPONÍVEIS
// ======================================================

const SIZES = [
  'small',
  'medium',
  'large'
];

// ======================================================
// 3. COMPONENTE BUTTON
// ======================================================

export default function Button({

  children,

  variant = 'primary',
  size = 'medium',

  icon: Icon,
  iconPosition = 'left',

  loading = false,
  loadingText = 'Processando...',

  disabled = false,
  fullWidth = false,

  type = 'button',
  className = '',

  ...props

}) {

  // ====================================================
  // 4. VALIDAÇÃO DAS PROPRIEDADES
  // ====================================================

  const validVariant = VARIANTS.includes(variant)
    ? variant
    : 'primary';

  const validSize = SIZES.includes(size)
    ? size
    : 'medium';

  const validIconPosition = iconPosition === 'right'
    ? 'right'
    : 'left';

  // Impede interações durante o carregamento

  const isDisabled = disabled || loading;

  // ====================================================
  // 5. CONFIGURAÇÃO DAS CLASSES CSS
  // ====================================================

  const buttonClass = [

    'falai-button',

    `falai-button--${validVariant}`,

    `falai-button--${validSize}`,

    fullWidth
      ? 'falai-button--full-width'
      : '',

    loading
      ? 'falai-button--loading'
      : '',

    className

  ].filter(Boolean).join(' ');

  // ====================================================
  // 6. RENDERIZAÇÃO DO ÍCONE
  // ====================================================

  const renderIcon = () => {

    if (!Icon) {
      return null;
    }

    if (React.isValidElement(Icon)) {

      return (
        <span
          className="falai-button__icon"
          aria-hidden="true"
        >
          {Icon}
        </span>
      );

    }

    return (
      <Icon
        className="falai-button__icon"
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
      />
    );

  };

  // ====================================================
  // 7. RENDERIZAÇÃO DO BOTÃO
  // ====================================================

  return (

    <button

      {...props}

      type={type}

      className={buttonClass}

      disabled={isDisabled}

      aria-busy={loading}

    >

      {loading ? (

        <>

          <LoaderCircle
            className="falai-button__spinner"
            aria-hidden="true"
            focusable="false"
          />

          <span className="falai-button__label">
            {loadingText}
          </span>

        </>

      ) : (

        <>

          {/* Ícone à esquerda */}

          {validIconPosition === 'left' &&
            renderIcon()}

          {/* Conteúdo do botão */}

          <span className="falai-button__label">
            {children}
          </span>

          {/* Ícone à direita */}

          {validIconPosition === 'right' &&
            renderIcon()}

        </>

      )}

    </button>

  );

}