import React, { useState } from 'react';

// Componentes reutilizáveis
import PageTitle from '../components/PageTitle.jsx';
import Button from '../components/Button.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function MapPage({ reports, navigate }) {

  // Estados dos filtros
  const [category, setCategory] = useState(
    'Todas as categorias'
  );

  const [status, setStatus] = useState(
    'Todos os status'
  );

  const [search, setSearch] = useState('');

  // Filtragem das ocorrências
  const filtered = reports.filter(r =>

    (
      category === 'Todas as categorias' ||
      r.category === category
    ) &&

    (
      status === 'Todos os status' ||
      r.status === status
    ) &&

    `${r.location} ${r.title}`
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (
    <>

      {/* Cabeçalho da página */}

      <PageTitle
        eyebrow="VISÃO TERRITORIAL"
        title="Mapa de problemas urbanos"
        description="Explore os registros da comunidade e identifique as regiões que precisam de atenção."
        action={
          <Button onClick={() => navigate('registrar')}>
            ＋ Registrar problema
          </Button>
        }
      />

      {/* Filtros de pesquisa */}

      <div className="filter-bar">

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >

          <option>Todas as categorias</option>

          {[...new Set(reports.map(r => r.category))]
            .map(c => (
              <option key={c}>{c}</option>
            ))
          }

        </select>

        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
        >

          <option>Todos os status</option>

          {[
            'Crítico',
            'Em análise',
            'Em atendimento',
            'Solucionado'
          ].map(s => (
            <option key={s}>{s}</option>
          ))}

        </select>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar bairro ou ocorrência..."
        />

      </div>

      {/* Estrutura principal do mapa */}

      <div className="map-layout">

        {/* Mapa demonstrativo */}

        <section className="map-canvas">

          <div className="map-grid-lines" />

          <div className="map-river" />

          <div className="map-road road-a" />
          <div className="map-road road-b" />
          <div className="map-road road-c" />

          <span className="map-label label-center">
            CENTRO
          </span>

          <span className="map-label label-north">
            ZONA NORTE
          </span>

          <span className="map-label label-south">
            ZONA SUL
          </span>

          {/* Marcadores das ocorrências */}

          {filtered.slice(0, 4).map((r, i) => (

            <button
              key={r.id}
              className={`map-marker marker-${i} ${
                r.status === 'Crítico'
                  ? 'marker-red'
                  : r.status === 'Solucionado'
                  ? 'marker-green'
                  : 'marker-blue'
              }`}
              title={`${r.title} — ${r.location}`}
              onClick={() => setSearch(r.location)}
            >

              <span>●</span>

            </button>

          ))}

          <div className="map-attribution">
            Mapa esquemático demonstrativo ·
            Preparado para integração cartográfica
          </div>

          {/* Controles demonstrativos de zoom */}

          <div className="map-zoom">

            <button aria-label="Aproximar">
              ＋
            </button>

            <button aria-label="Afastar">
              −
            </button>

          </div>

        </section>

        {/* Painel lateral de ocorrências */}

        <aside className="panel map-side">

          <div className="side-panel-title">

            <div>

              <span className="eyebrow">
                RESULTADOS
              </span>

              <h2>
                {filtered.length} ocorrências
              </h2>

            </div>

            <span className="result-count">
              ⌖
            </span>

          </div>

          {/* Lista de ocorrências filtradas */}

          <div className="map-report-list">

            {filtered.map(r => (

              <div
                className="map-report"
                key={r.id}
              >

                <span
                  className={`map-report-dot ${
                    r.status === 'Crítico'
                      ? 'dot-red'
                      : r.status === 'Solucionado'
                      ? 'dot-green'
                      : 'dot-blue'
                  }`}
                />

                <div>

                  <strong>{r.title}</strong>

                  <small>
                    {r.location} · {r.id}
                  </small>

                  <StatusBadge status={r.status} />

                </div>

              </div>

            ))}

            {filtered.length === 0 && (

              <p className="muted">
                Nenhuma ocorrência corresponde aos filtros.
              </p>

            )}

          </div>

          {/* Legenda demonstrativa */}

          <div className="map-legend">

            <strong>Legenda</strong>

            <span>
              <i className="dot-red" /> Crítico
            </span>

            <span>
              <i className="dot-blue" /> Em andamento
            </span>

            <span>
              <i className="dot-green" /> Solucionado
            </span>

          </div>

        </aside>

      </div>

    </>
  );
}