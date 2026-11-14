
import React from 'react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import DashboardStatCard from '../components/dashboard/StatCard.jsx';
import ResolutionChart from '../components/dashboard/ResolutionChart.jsx';
import CategoryChart from '../components/dashboard/CategoryChart.jsx';
import EvolutionChart from '../components/dashboard/EvolutionChart.jsx';
import { ClipboardList, Clock, Activity, CircleCheck } from 'lucide-react';

export default function Home({ reports, navigate }) {
  const recent = reports.slice(0, 3);
  return <>
    <div className="welcome-strip"><div><span className="welcome-kicker">PARTICIPAÇÃO CIDADÃ</span><h1>Problemas da cidade.<br/><em>Soluções mais próximas.</em></h1><p>Uma cidade melhor começa quando a gente participa. Registre, acompanhe e ajude a transformar o lugar onde vive.</p><div className="welcome-actions"><Button onClick={() => navigate('registrar')}>＋ Registrar um problema</Button><button className="hero-link" onClick={() => navigate('mapa')}>Explorar mapa <span>↗</span></button></div></div><div className="hero-visual" aria-hidden="true"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-pin">⌖</div><div className="hero-note note-top"><span className="note-dot green"/> Cidade em movimento</div><div className="hero-note note-bottom"><strong>103</strong><span>registros acompanhados</span></div><div className="hero-coordinate">3°07' S · 60°01' W</div></div></div>
    
        {/* Indicadores do dashboard */}

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

    {/* Gráficos do dashboard */}

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
    <div className="content-grid home-content"><section className="panel recent-panel"><SectionHeader title="Ocorrências recentes" action="Ver todas" onAction={() => navigate('mapa')}/><div className="report-list">{recent.map((r, i) => <div className="report-row" key={r.id}><div className={`report-symbol symbol-${i}`}>{['⌁','☼','⌖'][i]}</div><div className="report-main"><strong>{r.title}</strong><span>{r.location} · {r.date}</span></div><StatusBadge status={r.status}/></div>)}</div></section><section className="panel participation-panel"><div className="panel-heading"><div><span className="eyebrow">COMO FUNCIONA</span><h2>Participar é simples</h2></div><span className="steps-mark">01 — 03</span></div><div className="mini-step"><span>01</span><div><strong>Registre</strong><p>Conte o que está acontecendo e envie uma foto.</p></div></div><div className="mini-step"><span>02</span><div><strong>Localize</strong><p>Indique o local para facilitar a identificação.</p></div></div><div className="mini-step"><span>03</span><div><strong>Acompanhe</strong><p>Consulte o protocolo e veja cada atualização.</p></div></div><button className="text-action learn-more" onClick={() => navigate('registrar')}>Fazer meu primeiro registro →</button></section></div>
  </>;
}
