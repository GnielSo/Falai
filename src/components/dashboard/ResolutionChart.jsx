import React from 'react';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

export default function ResolutionChart({
  total = 103,
  resolved = 46
}) {

  const pending = total - resolved;

  const percentage = total > 0
    ? ((resolved / total) * 100).toFixed(1)
    : '0.0';

  const data = [
    { name: 'Resolvidas', value: resolved },
    { name: 'Pendentes', value: pending }
  ];

  const colors = ['#16A085', '#E2E8F0'];

  return (
    <div className="dashboard-chart-card">

      <h3>Taxa de resolução</h3>

      <p>Acompanhamento das ocorrências</p>

      <div className="resolution-chart">

        <ResponsiveContainer width="100%" height={240}>
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={75}
              outerRadius={100}
              paddingAngle={3}
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={colors[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

        <div className="resolution-center">
          <strong>{percentage.replace('.', ',')}%</strong>
          <span>Resolvidas</span>
        </div>

      </div>

      <div className="resolution-legend">
        <span>🟢 {resolved} resolvidas</span>
        <span>⚪ {pending} pendentes</span>
      </div>

    </div>
  );
}