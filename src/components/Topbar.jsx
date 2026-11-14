import React from 'react';

import {
  Menu,
  Bell,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function Topbar({ title, onMenu, navigate }) {
  return (
    <header className="topbar">

      {/* Menu para dispositivos móveis */}
      <button
        className="mobile-menu"
        onClick={onMenu}
        aria-label="Abrir menu"
      >
        <Menu size={24} />
      </button>

      {/* Identificação da página atual */}
      <div className="breadcrumb">
        <span>FALAI</span>

        <ChevronRight size={16} aria-hidden="true" />

        <strong>{title}</strong>
      </div>

      {/* Ações do cabeçalho */}
      <div className="top-actions">

        {/* Localização */}
        <span className="city-pill">
          <MapPin size={16} aria-hidden="true" />
          Manaus, AM
        </span>

        {/* Notificações */}
        <button
          className="icon-button"
          aria-label="Notificações"
          title="Notificações"
        >
          <Bell size={22} strokeWidth={1.8} />
          <i />
        </button>

        {/* Perfil do usuário */}
        <button
          className="top-avatar"
          onClick={() => navigate('perfil')}
          aria-label="Abrir perfil"
          title="Meu perfil"
        >
          AS
        </button>

      </div>
    </header>
  );
}