import React from 'react';

// ======================================================
// 1. IMPORTAÇÃO DOS COMPONENTES
// ======================================================

import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

// Componentes do dashboard

import DashboardStatCard from '../components/dashboard/StatCard.jsx';
import ResolutionChart from '../components/dashboard/ResolutionChart.jsx';
import CategoryChart from '../components/dashboard/CategoryChart.jsx';
import EvolutionChart from '../components/dashboard/EvolutionChart.jsx';

// Ícones

import {
  ClipboardList,
  Clock,
  Activity,
  CircleCheck,
  ListChecks,
  Plus,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

// ======================================================
// COMPONENTE HOME
// ======================================================

export default function Home({ reports, navigate }) {

  // Seleciona as três ocorrências mais recentes

  const recent = reports.slice(0, 3);

  return (

    <>

      {/* ==============================================
          1. BANNER DE BOAS-VINDAS
      ============================================== */}

      <div className="welcome-strip">

        <div>

          <span className="welcome-kicker">
            PARTICIPAÇÃO CIDADÃ
          </span>

          <h1>
            Problemas da cidade.
            <br />
            <em>Soluções mais próximas.</em>
          </h1>

          <p>
            Uma cidade melhor começa quando a gente
            participa. Registre, acompanhe e ajude
            a transformar o lugar onde vive.
          </p>

          <div className="welcome-actions">

            <Button
             variant="primary"
             size="large"
             icon={Plus}
             onClick={() => navigate('registrar')}
             >
                 Registrar um problema
             </Button>

            <Button
             variant="outline"
             size="large"
             icon={ArrowUpRight}
             iconPosition="right"
             onClick={() => navigate('mapa')}
            >
             Explorar mapa
         </Button>

        </div>

        </div>


        {/* Elementos visuais do banner */}

        <div
          className="hero-visual"
          aria-hidden="true"
        >

          <div className="hero-orbit orbit-one" />

          <div className="hero-orbit orbit-two" />

          <div className="hero-pin">
            ⌖
          </div>

          <div className="hero-note note-top">

            <span className="note-dot green" />

            Cidade em movimento

          </div>

          <div className="hero-note note-bottom">

            <strong>103</strong>

            <span>registros acompanhados</span>

          </div>

          <div className="hero-coordinate">

            3°07' S · 60°01' W

          </div>

        </div>

      </div>


      {/* ==============================================
          2. INDICADORES DO DASHBOARD
      ============================================== */}

      <div className="stats-grid">

        <DashboardStatCard
          title="Ocorrências registradas"
          value={103}
          description="Participação da comunidade"
          icon={ClipboardList}
          color="#4784BA"
        />

        <DashboardStatCard
          title="Em análise"
          value={28}
          description="Aguardando avaliação"
          icon={Clock}
          color="#D69A32"
        />

        <DashboardStatCard
          title="Em atendimento"
          value={17}
          description="Equipes mobilizadas"
          icon={Activity}
          color="#8971BA"
        />

        <DashboardStatCard
          title="Resolvidas"
          value={46}
          description="Problemas solucionados"
          icon={CircleCheck}
          color="#16A085"
        />

      </div>


      {/* ==============================================
          3. GRÁFICOS DO DASHBOARD
      ============================================== */}

      <div className="dashboard-charts-grid">

        <ResolutionChart
          total={103}
          resolved={46}
        />

        <CategoryChart />

        <EvolutionChart />

      </div>

      <p className="dashboard-demo-note">

        Indicadores demonstrativos do FALAI.

      </p>


      <div className="content-grid home-content">


        {/* ============================================
            4. OCORRÊNCIAS RECENTES
        ============================================ */}

        <section className="panel recent-panel">

          {/* SectionHeader modernizado */}

          <SectionHeader
            eyebrow="MONITORAMENTO URBANO"
            title="Ocorrências recentes"
            description="Últimos registros realizados pela comunidade."
            icon={ListChecks}
            action="Ver todas"
            onAction={() => navigate('mapa')}
          />


          {/* Lista de ocorrências */}

          <div className="report-list">

            {recent.map((r, i) => (

              <div
                className="report-row"
                key={r.id}
              >

                <div className={`report-symbol symbol-${i}`}>

                  {['⌁', '☼', '⌖'][i]}

                </div>

                <div className="report-main">

                  <strong>{r.title}</strong>

                  <span>
                    {r.location} · {r.date}
                  </span>

                </div>

                <StatusBadge status={r.status} />

              </div>

            ))}

          </div>

        </section>


        {/* ============================================
            5. GUIA DE PARTICIPAÇÃO CIDADÃ
        ============================================ */}

        <section className="panel participation-panel">

          <div className="panel-heading">

            <div>

              <span className="eyebrow">
                COMO FUNCIONA
              </span>

              <h2>Participar é simples</h2>

            </div>

            <span className="steps-mark">
              01 — 03
            </span>

          </div>


          {/* Etapa 01 */}

          <div className="mini-step">

            <span>01</span>

            <div>

              <strong>Registre</strong>

              <p>
                Conte o que está acontecendo e envie
                uma foto.
              </p>

            </div>

          </div>


          {/* Etapa 02 */}

          <div className="mini-step">

            <span>02</span>

            <div>

              <strong>Localize</strong>

              <p>
                Indique o local para facilitar
                a identificação.
              </p>

            </div>

          </div>


          {/* Etapa 03 */}

          <div className="mini-step">

            <span>03</span>

            <div>

              <strong>Acompanhe</strong>

              <p>
                Consulte o protocolo e veja cada
                atualização.
              </p>

            </div>

          </div>


          {/* Botão de registro */}

         <Button
         variant="ghost"
        size="medium"
         icon={ArrowRight}
         iconPosition="right"
         onClick={() => navigate('registrar')}
    >
        Fazer meu primeiro registro
        </Button>

     </section>

     </div>

    </>

  );

}