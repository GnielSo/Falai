/*import React from 'react';
import { statusClass } from '../data/mockData.js';
export default function StatusBadge({ status }) { return <span className={`status-badge ${statusClass(status)}`}><i />{status}</span>; }
*/

import React from 'react';

import {
  Inbox,
  Clock,
  ShieldCheck,
  Activity,
  CircleCheck,
  CircleX,
  CircleHelp,
  TriangleAlert,
  AlertCircle,
  ArrowUp
} from 'lucide-react';



// ======================================================
// 1. CONFIGURAÇÃO DOS STATUS DE ATENDIMENTO
// ======================================================

const STATUS_CONFIG = {

  'recebida': {
    label: 'Recebida',
    icon: Inbox,
    tone: 'neutral'
  },

  'em análise': {
    label: 'Em análise',
    icon: Clock,
    tone: 'warning'
  },

  'validada': {
    label: 'Validada',
    icon: ShieldCheck,
    tone: 'purple'
  },

  'em andamento': {
    label: 'Em andamento',
    icon: Activity,
    tone: 'info'
  },

  'resolvida': {
    label: 'Resolvida',
    icon: CircleCheck,
    tone: 'success'
  },

  'rejeitada': {
    label: 'Rejeitada',
    icon: CircleX,
    tone: 'danger'
  },


  // ====================================================
  // COMPATIBILIDADE COM OS STATUS DO MVP ATUAL
  // ====================================================

  'em atendimento': {
    label: 'Em atendimento',
    icon: Activity,
    tone: 'info'
  },

  'solucionado': {
    label: 'Solucionado',
    icon: CircleCheck,
    tone: 'success'
  },

  'crítico': {
    label: 'Crítico',
    icon: TriangleAlert,
    tone: 'danger'
  }

};


// ======================================================
// 2. CONFIGURAÇÃO DOS NÍVEIS DE GRAVIDADE
// ======================================================

const SEVERITY_CONFIG = {

  'baixa': {
    label: 'Baixa',
    icon: AlertCircle,
    tone: 'success'
  },

  'moderada': {
    label: 'Moderada',
    icon: TriangleAlert,
    tone: 'warning'
  },

  'alta': {
    label: 'Alta',
    icon: ArrowUp,
    tone: 'orange'
  },

  'crítica': {
    label: 'Crítica',
    icon: TriangleAlert,
    tone: 'danger'
  },


  // Compatibilidade com os dados antigos

  'normal': {
    label: 'Normal',
    icon: AlertCircle,
    tone: 'neutral'
  },

  'crítico': {
    label: 'Crítico',
    icon: TriangleAlert,
    tone: 'danger'
  }

};


// ======================================================
// 3. CONFIGURAÇÃO PADRÃO
// ======================================================

const DEFAULT_CONFIG = {

  label: 'Não informado',
  icon: CircleHelp,
  tone: 'neutral'

};


// ======================================================
// 4. COMPONENTE STATUS BADGE
// ======================================================

export default function StatusBadge({

  status,
  type = 'status',
  size = 'medium',
  showIcon = true

}) {

  // Normaliza o valor recebido

  const normalizedStatus = String(status ?? '')
    .trim()
    .toLowerCase();


  // Define se o componente representa
  // um status ou um nível de gravidade

  const isSeverity = type === 'severity';

  const config = isSeverity
    ? SEVERITY_CONFIG
    : STATUS_CONFIG;


  // Busca a configuração correspondente

  const current = Object.hasOwn(config, normalizedStatus)
    ? config[normalizedStatus]
    : DEFAULT_CONFIG;


  // Recupera o ícone correspondente

  const Icon = current.icon;


  // Valida o tamanho informado

  const validSize = ['small', 'medium', 'large']
    .includes(size)
      ? size
      : 'medium';


  // Define as classes CSS

  const badgeClass = [

    'falai-status-badge',

    `falai-status-badge--${current.tone}`,

    `falai-status-badge--${validSize}`

  ].join(' ');


  return (

    <span className={badgeClass}>

      {/* Identificação para leitores de tela */}

      <span className="falai-status-badge__sr-only">

        {isSeverity ? 'Gravidade: ' : 'Status: '}

      </span>


      {/* Ícone opcional */}

      {showIcon && (

        <Icon
          className="falai-status-badge__icon"
          strokeWidth={2}
          aria-hidden="true"
          focusable="false"
        />

      )}


      {/* Texto do indicador */}

      <span className="falai-status-badge__label">

        {current.label}

      </span>

    </span>

  );

}