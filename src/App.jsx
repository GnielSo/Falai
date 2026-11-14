import React, { useMemo, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import PageTitle from './components/PageTitle.jsx';
import StatusBadge from './components/StatusBadge.jsx';

import Button from './components/Button.jsx';
import StatCard from './components/StatCard.jsx';
import SectionHeader from './components/SectionHeader.jsx';

import { initialReports } from './data/mockData.js';

import DashboardStatCard from './components/dashboard/StatCard.jsx';
import ResolutionChart from './components/dashboard/ResolutionChart.jsx';
import CategoryChart from './components/dashboard/CategoryChart.jsx';
import EvolutionChart from './components/dashboard/EvolutionChart.jsx';

import {
  ClipboardList,
  Clock,
  Activity,
  CircleCheck
} from 'lucide-react';


const pageTitles = { home: 'Visão geral', mapa: 'Mapa de ocorrências', registrar: 'Registrar problema', confirmacao: 'Confirmação', consultar: 'Consultar protocolo', admin: 'Painel de gestão', perfil: 'Meu perfil' };

function Home({ reports, navigate }) {
  const recent = reports.slice(0, 3);
  return <>
    <div className="welcome-strip"><div><span className="welcome-kicker">PARTICIPAÇÃO CIDADÃ</span><h1>Problemas da cidade.<br/><em>Soluções mais próximas.</em></h1><p>Uma cidade melhor começa quando a gente participa. Registre, acompanhe e ajude a transformar o lugar onde vive.</p><div className="welcome-actions"><Button onClick={() => navigate('registrar')}>＋ Registrar um problema</Button><button className="hero-link" onClick={() => navigate('mapa')}>Explorar mapa <span>↗</span></button></div></div><div className="hero-visual" aria-hidden="true"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-pin">⌖</div><div className="hero-note note-top"><span className="note-dot green"/> Cidade em movimento</div><div className="hero-note note-bottom"><strong>103</strong><span>registros acompanhados</span></div><div className="hero-coordinate">3°07' S · 60°01' W</div></div></div>
   
    {/* 
    <div className="stats-grid"><StatCard label="Ocorrências registradas" value="103" change="Participação da comunidade" icon="▤" tone="blue"/><StatCard label="Em análise" value="28" change="Aguardando avaliação" icon="◷" tone="amber"/><StatCard label="Em atendimento" value="17" change="Equipes mobilizadas" icon="↗" tone="violet"/><StatCard label="Resolvidas" value="46" change="Problemas solucionados" icon="✓" tone="green"/></div> 
    */}

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

function Register({ onSubmit, navigate }) {
  const [category, setCategory] = useState(''); const [priority, setPriority] = useState('Normal'); const [description, setDescription] = useState(''); const [location, setLocation] = useState(''); const [photo, setPhoto] = useState(null); const [error, setError] = useState('');
  function submit(e) { e.preventDefault(); if (!category || !description.trim() || !location.trim()) { setError('Preencha os campos obrigatórios para continuar.'); return; } onSubmit({ category, priority, description, location, photoName: photo?.name || '' }); }
  return <><PageTitle eyebrow="PARTICIPE DA TRANSFORMAÇÃO" title="Registrar um problema" description="Compartilhe uma situação da sua região. Sua contribuição ajuda a gestão a agir." action={<Button variant="outline" onClick={() => navigate('home')}>← Voltar</Button>}/><div className="form-layout"><form className="panel report-form" onSubmit={submit}><div className="form-section-title"><span className="form-step">01</span><div><h2>Sobre o problema</h2><p>Descreva a ocorrência com o máximo de clareza.</p></div></div><div className="form-row"><label className="field"><span>Categoria <b>*</b></span><select value={category} onChange={e => setCategory(e.target.value)} required><option value="">Selecione uma categoria</option><option>Buraco / pavimentação</option><option>Iluminação pública</option><option>Saneamento</option><option>Calçada / acessibilidade</option><option>Limpeza urbana</option><option>Transporte</option><option>Outro</option></select></label><label className="field"><span>Prioridade percebida</span><select value={priority} onChange={e => setPriority(e.target.value)}><option>Normal</option><option>Alta</option><option>Crítica</option></select></label></div><label className="field"><span>Descrição <b>*</b></span><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="O que aconteceu? Como isso afeta as pessoas da região?" rows="5" required/><small>Evite incluir dados pessoais de terceiros.</small></label><div className="field"><span>Foto da ocorrência</span><label className="upload-box"><input type="file" accept="image/png,image/jpeg,image/webp" onChange={e => setPhoto(e.target.files?.[0] || null)}/><span className="upload-icon">↑</span><strong>{photo ? photo.name : 'Clique para adicionar uma foto'}</strong><small>{photo ? 'Arquivo selecionado' : 'PNG, JPG ou WEBP · Opcional nesta versão demonstrativa'}</small></label></div><div className="form-section-title location-title"><span className="form-step">02</span><div><h2>Onde acontece?</h2><p>Informe o endereço ou referência para localizar o problema.</p></div></div><label className="field"><span>Localização <b>*</b></span><input value={location} onChange={e => setLocation(e.target.value)} placeholder="Rua, número, bairro ou ponto de referência" required/></label>{error && <div className="form-error" role="alert">{error}</div>}<div className="form-footer"><span>Os campos com * são obrigatórios.</span><Button type="submit">Enviar ocorrência <span>→</span></Button></div></form><aside className="panel form-aside"><div className="aside-illustration">⌖</div><span className="eyebrow">ANTES DE ENVIAR</span><h3>Um bom registro faz diferença.</h3><p>Confira estas dicas para ajudar a equipe responsável a entender e localizar a situação.</p><div className="tip"><span>✓</span><p><strong>Seja específico</strong>Descreva o que está acontecendo e desde quando.</p></div><div className="tip"><span>✓</span><p><strong>Inclua uma referência</strong>Informe um ponto conhecido próximo ao problema.</p></div><div className="tip"><span>✓</span><p><strong>Adicione uma foto</strong>Uma imagem pode ajudar a compreender a ocorrência.</p></div><div className="privacy-note">▣ <span>Seus dados serão utilizados para identificação e acompanhamento da solicitação.</span></div></aside></div></>;
}

function Confirmation({ report, navigate }) { return <div className="confirmation-wrap"><div className="success-icon">✓</div><span className="eyebrow">REGISTRO CONCLUÍDO</span><h1>Obrigado por participar!</h1><p>Sua ocorrência foi registrada nesta versão demonstrativa do FALAI.</p><div className="protocol-card"><span>SEU NÚMERO DE PROTOCOLO</span><strong>{report?.id || 'FAL-2026-00482'}</strong><button onClick={() => navigator.clipboard?.writeText(report?.id || 'FAL-2026-00482')}>Copiar protocolo ▢</button></div><StatusBadge status="Em análise"/><div className="confirmation-actions"><Button onClick={() => navigate('consultar')}>Acompanhar protocolo</Button><Button variant="outline" onClick={() => navigate('home')}>Voltar ao início</Button></div></div>; }

function Consult({ reports }) {
  const [protocol, setProtocol] = useState('FAL-2026-00482'); const [searched, setSearched] = useState('FAL-2026-00482');
  const result = reports.find(r => r.id.toLowerCase() === searched.trim().toLowerCase());
  return <><PageTitle eyebrow="ACOMPANHE SUA SOLICITAÇÃO" title="Consultar protocolo" description="Informe o número recebido ao registrar uma ocorrência para consultar o andamento."/><div className="panel search-panel"><label className="field"><span>Número do protocolo</span><input value={protocol} onChange={e => setProtocol(e.target.value)} placeholder="Ex.: FAL-2026-00482"/></label><Button onClick={() => setSearched(protocol)}>Consultar protocolo <span>→</span></Button></div>{searched && (result ? <div className="panel tracking-panel"><div className="tracking-head"><div><span className="eyebrow">DETALHES DA SOLICITAÇÃO</span><h2>{result.title}</h2><p>{result.id} · {result.category}</p></div><StatusBadge status={result.status}/></div><div className="tracking-meta"><div><small>LOCALIZAÇÃO</small><strong>{result.location}</strong></div><div><small>DATA DO REGISTRO</small><strong>{result.date}</strong></div><div><small>PRIORIDADE</small><strong>{result.priority}</strong></div></div><h3>Etapas do atendimento</h3><div className="timeline"><div className="timeline-item done"><span>✓</span><div><strong>Ocorrência registrada</strong><small>Solicitação recebida pelo FALAI</small></div></div><div className={`timeline-item ${['Em análise','Em atendimento','Solucionado'].includes(result.status) ? 'done' : ''}`}><span>✓</span><div><strong>Em análise</strong><small>Aguardando avaliação da equipe responsável</small></div></div><div className={`timeline-item ${['Em atendimento','Solucionado'].includes(result.status) ? 'done' : ''}`}><span>3</span><div><strong>Em atendimento</strong><small>Encaminhamento para execução do serviço</small></div></div><div className={`timeline-item ${result.status === 'Solucionado' ? 'done' : ''}`}><span>4</span><div><strong>Resolvido</strong><small>Conclusão e retorno da solicitação</small></div></div></div></div> : <div className="empty-state"> <span>⌕</span><h3>Protocolo não encontrado</h3><p>Confira o número informado e tente novamente. Esta versão utiliza registros demonstrativos.</p></div>)}</>;
}

function MapPage({ reports, navigate }) {
  const [category, setCategory] = useState('Todas as categorias'); const [status, setStatus] = useState('Todos os status'); const [search, setSearch] = useState('');
  const filtered = reports.filter(r => (category === 'Todas as categorias' || r.category === category) && (status === 'Todos os status' || r.status === status) && `${r.location} ${r.title}`.toLowerCase().includes(search.toLowerCase()));
  return <><PageTitle eyebrow="VISÃO TERRITORIAL" title="Mapa de problemas urbanos" description="Explore os registros da comunidade e identifique as regiões que precisam de atenção." action={<Button onClick={() => navigate('registrar')}>＋ Registrar problema</Button>}/><div className="filter-bar"><select value={category} onChange={e => setCategory(e.target.value)}><option>Todas as categorias</option>{[...new Set(reports.map(r => r.category))].map(c => <option key={c}>{c}</option>)}</select><select value={status} onChange={e => setStatus(e.target.value)}><option>Todos os status</option>{['Crítico','Em análise','Em atendimento','Solucionado'].map(s => <option key={s}>{s}</option>)}</select><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar bairro ou ocorrência..."/></div><div className="map-layout"><section className="map-canvas"><div className="map-grid-lines"/><div className="map-river"/><div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/><span className="map-label label-center">CENTRO</span><span className="map-label label-north">ZONA NORTE</span><span className="map-label label-south">ZONA SUL</span>{filtered.slice(0, 4).map((r, i) => <button key={r.id} className={`map-marker marker-${i} ${r.status === 'Crítico' ? 'marker-red' : r.status === 'Solucionado' ? 'marker-green' : 'marker-blue'}`} title={`${r.title} — ${r.location}`} onClick={() => { setSearch(r.location); }}><span>●</span></button>)}<div className="map-attribution">Mapa esquemático demonstrativo · Preparado para integração cartográfica</div><div className="map-zoom"><button aria-label="Aproximar">＋</button><button aria-label="Afastar">−</button></div></section><aside className="panel map-side"><div className="side-panel-title"><div><span className="eyebrow">RESULTADOS</span><h2>{filtered.length} ocorrências</h2></div><span className="result-count">⌖</span></div><div className="map-report-list">{filtered.map(r => <div className="map-report" key={r.id}><span className={`map-report-dot ${r.status === 'Crítico' ? 'dot-red' : r.status === 'Solucionado' ? 'dot-green' : 'dot-blue'}`}/><div><strong>{r.title}</strong><small>{r.location} · {r.id}</small><StatusBadge status={r.status}/></div></div>)}{filtered.length === 0 && <p className="muted">Nenhuma ocorrência corresponde aos filtros.</p>}</div><div className="map-legend"><strong>Legenda</strong><span><i className="dot-red"/> Crítico</span><span><i className="dot-blue"/> Em andamento</span><span><i className="dot-green"/> Solucionado</span></div></aside></div></>;
}

function Admin({ reports, navigate }) {
  const counts = useMemo(() => ({ total: reports.length + 99, analysis: reports.filter(r => r.status === 'Em análise').length + 27, service: reports.filter(r => r.status === 'Em atendimento').length + 16, solved: reports.filter(r => r.status === 'Solucionado').length + 45 }), [reports]);
  return <><PageTitle eyebrow="ÁREA ADMINISTRATIVA" title="Painel de gestão" description="Acompanhe os registros e visualize um panorama das demandas da cidade." action={<span className="admin-chip"><i/> Visão demonstrativa</span>}/><div className="stats-grid admin-stats"><StatCard label="Total de ocorrências" value={counts.total} change="Registros na plataforma" icon="▤" tone="blue"/><StatCard label="Em análise" value={counts.analysis} change="Aguardando avaliação" icon="◷" tone="amber"/><StatCard label="Em atendimento" value={counts.service} change="Em execução" icon="↗" tone="violet"/><StatCard label="Resolvidas" value={counts.solved} change="Concluídas" icon="✓" tone="green"/></div><div className="panel table-panel"><SectionHeader title="Ocorrências prioritárias" action="Ver mapa" onAction={() => navigate('mapa')}/><div className="table-scroll"><table><thead><tr><th>PROTOCOLO</th><th>OCORRÊNCIA</th><th>REGIÃO</th><th>STATUS</th><th>PRIORIDADE</th><th></th></tr></thead><tbody>{reports.map(r => <tr key={r.id}><td className="table-id">{r.id}</td><td><strong>{r.title}</strong><small>{r.category}</small></td><td>{r.location}</td><td><StatusBadge status={r.status}/></td><td>{r.priority}</td><td><button className="table-action" onClick={() => navigate('consultar')}>Ver →</button></td></tr>)}</tbody></table></div></div><div className="admin-note">Os indicadores e registros desta versão são demonstrativos. A atualização em tempo real será implementada com a API do FALAI.</div></>;
}

function Profile() { return <><PageTitle eyebrow="ÁREA DO CIDADÃO" title="Meu perfil" description="Consulte suas informações e preferências de participação."/><div className="profile-grid"><section className="panel profile-card"><div className="profile-avatar-large">AS</div><h2>Adriel Souza</h2><p>Cidadão cadastrado</p><div className="profile-divider"/><div className="profile-numbers"><div><strong>8</strong><span>Registros</span></div><div><strong>5</strong><span>Resolvidos</span></div></div><button className="button button-outline">Editar informações</button></section><section className="panel preferences-card"><h2>Preferências</h2><p>Gerencie como deseja utilizar a plataforma.</p><div className="preference-row"><span className="preference-icon">♧</span><div><strong>Notificações de atualização</strong><small>Receber avisos sobre o andamento das ocorrências.</small></div><span className="toggle-on"/></div><div className="preference-row"><span className="preference-icon">◉</span><div><strong>Acessibilidade</strong><small>Recursos para facilitar a navegação.</small></div><span className="preference-arrow">→</span></div><div className="preference-row"><span className="preference-icon">▣</span><div><strong>Privacidade</strong><small>Informações sobre o uso dos seus dados.</small></div><span className="preference-arrow">→</span></div></section></div></>; }

export default function App() {
  const [page, setPage] = useState('home'); const [menuOpen, setMenuOpen] = useState(false); const [reports, setReports] = useState(initialReports); const [lastReport, setLastReport] = useState(null);
  function navigate(next) { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function submitReport(data) { const report = { ...data, id: `FAL-${new Date().getFullYear()}-${String(500 + reports.length).padStart(5, '0')}`, title: data.category, date: new Date().toLocaleDateString('pt-BR'), status: 'Em análise' }; setReports(current => [report, ...current]); setLastReport(report); navigate('confirmacao'); }
  return <div className="app-shell"><Sidebar page={page} navigate={navigate} open={menuOpen} close={() => setMenuOpen(false)}/><div className="main-area"><Topbar title={pageTitles[page]} onMenu={() => setMenuOpen(true)} navigate={navigate}/><main className="page-content">{page === 'home' && <Home reports={reports} navigate={navigate}/>}{page === 'registrar' && <Register onSubmit={submitReport} navigate={navigate}/>}{page === 'confirmacao' && <Confirmation report={lastReport} navigate={navigate}/>}{page === 'consultar' && <Consult reports={reports}/>}{page === 'mapa' && <MapPage reports={reports} navigate={navigate}/>}{page === 'admin' && <Admin reports={reports} navigate={navigate}/>}{page === 'perfil' && <Profile/>}</main><footer className="app-footer"><span>© 2026 FALAI · Participação cidadã</span><span>Uma cidade melhor começa com a sua voz.</span></footer></div></div>;
}
