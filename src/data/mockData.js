export const initialReports = [
  { id: 'FAL-2026-00482', category: 'Buraco / pavimentação', title: 'Buraco em via', location: 'Centro', date: '08/09/2026', status: 'Em atendimento', priority: 'Alta', description: 'Buraco próximo à faixa de pedestres, dificultando a circulação.' },
  { id: 'FAL-2026-00477', category: 'Saneamento', title: 'Acúmulo de água', location: 'Zona Norte', date: '07/09/2026', status: 'Crítico', priority: 'Crítica', description: 'Ponto de alagamento recorrente após chuva.' },
  { id: 'FAL-2026-00471', category: 'Iluminação pública', title: 'Poste sem iluminação', location: 'Zona Sul', date: '06/09/2026', status: 'Em análise', priority: 'Normal', description: 'Trecho com iluminação pública inoperante.' },
  { id: 'FAL-2026-00465', category: 'Limpeza urbana', title: 'Descarte irregular', location: 'Zona Centro-Sul', date: '05/09/2026', status: 'Solucionado', priority: 'Normal', description: 'Resíduos descartados em área pública.' }
];

export const statusClass = (status) => ({
  'Crítico': 'critical',
  'Em análise': 'analysis',
  'Em atendimento': 'service',
  'Solucionado': 'solved'
}[status] || 'neutral');
