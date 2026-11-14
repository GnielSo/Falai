import React from 'react';
import Brand from './Brand.jsx';

import {
  House,
  MapPin,
  CirclePlus,
  Search,
  LayoutDashboard,
  Info,
  Plus,
  Ellipsis
} from 'lucide-react';

const links = [
  { id: 'home', icon: House, label: 'Visão geral' },
  { id: 'mapa', icon: MapPin, label: 'Mapa de ocorrências' },
  { id: 'registrar', icon: CirclePlus, label: 'Registrar problema' },
  { id: 'consultar', icon: Search, label: 'Consultar protocolo' },
  { id: 'admin', icon: LayoutDashboard, label: 'Painel de gestão' }
];

export default function Sidebar({ page, navigate, open, close }) {
  return (
    <>
      {open && (
        <button
          className="sidebar-scrim"
          aria-label="Fechar menu"
          onClick={close}
        />
      )}

      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>

        <div className="sidebar-brand">
          <Brand />
        </div>

        <div className="workspace-label">
          PLATAFORMA CIDADÃ
        </div>

        <nav className="side-nav" aria-label="Navegação principal">

          {links.map(link => {
            const Icon = link.icon;

            return (
              <button
                key={link.id}
                className={`nav-item ${page === link.id ? 'selected' : ''}`}
                aria-current={page === link.id ? 'page' : undefined}
                onClick={() => {
                  navigate(link.id);
                  close();
                }}
              >
                <span className="nav-icon">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <span>{link.label}</span>

                {link.id === 'registrar' && (
                  <span className="nav-plus">
                    <Plus size={18} aria-hidden="true" />
                  </span>
                )}
              </button>
            );
          })}

        </nav>

        <div className="sidebar-bottom">

          <div className="help-card">
            <div className="help-icon">
              <Info size={18} aria-hidden="true" />
            </div>

            <strong>Sua cidade, sua voz.</strong>

            <p>
              Pequenas participações ajudam a construir
              grandes mudanças.
            </p>
          </div>

          <button
            className={`nav-item profile-link ${page === 'perfil' ? 'selected' : ''}`}
            onClick={() => {
              navigate('perfil');
              close();
            }}
          >
            <span className="avatar">AS</span>

            <span className="profile-copy">
              <strong>Adriel Souza</strong>
              <small>Conta cidadã</small>
            </span>

            <span className="profile-more">
              <Ellipsis size={20} aria-hidden="true" />
            </span>
          </button>

        </div>
      </aside>
    </>
  );
}