import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const defaultData = [
  { mes: 'Jun', registradas: 12, resolvidas: 4 },
  { mes: 'Jul', registradas: 20, resolvidas: 8 },
  { mes: 'Ago', registradas: 17, resolvidas: 9 },
  { mes: 'Set', registradas: 25, resolvidas: 11 },
  { mes: 'Out', registradas: 29, resolvidas: 14 }
];

export default function EvolutionChart({
  data = defaultData
}) {

  const totalRegistradas = data.reduce(
    (sum, item) => sum + item.registradas, 0
  );

  const totalResolvidas = data.reduce(
    (sum, item) => sum + item.resolvidas, 0
  );

  return (
    <div className="dashboard-chart-card evolution-card">

      <h3>Evolução das ocorrências</h3>

      <p>
        Acompanhamento mensal da participação cidadã
      </p>

      <div className="evolution-summary">

        <div>
          <span>Ocorrências registradas</span>
          <strong>{totalRegistradas}</strong>
        </div>

        <div>
          <span>Ocorrências resolvidas</span>
          <strong className="evolution-resolved">
            {totalResolvidas}
          </strong>
        </div>

      </div>

      <div className="evolution-chart">

        <ResponsiveContainer width="100%" height={300}>

          <LineChart
            data={data}
            margin={{
              top: 15,
              right: 20,
              left: 0,
              bottom: 10
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E2E8F0"
              vertical={false}
            />

            <XAxis
              dataKey="mes"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="registradas"
              name="Registradas"
              stroke="#4784BA"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />

            <Line
              type="monotone"
              dataKey="resolvidas"
              name="Resolvidas"
              stroke="#16A085"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}