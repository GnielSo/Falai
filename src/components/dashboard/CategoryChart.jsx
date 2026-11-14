import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const defaultData = [
  { name: 'Pavimentação', total: 38 },
  { name: 'Iluminação pública', total: 27 },
  { name: 'Saneamento', total: 21 },
  { name: 'Descarte irregular', total: 17 }
];

const colors = [
  '#16A085',
  '#4784BA',
  '#D69A32',
  '#8971BA'
];

export default function CategoryChart({
  data = defaultData
}) {

  const total = data.reduce(
    (sum, item) => sum + item.total, 0
  );

  return (
    <div className="dashboard-chart-card">

      <h3>Ocorrências por categoria</h3>

      <p>
        Distribuição dos problemas urbanos registrados
      </p>

      <div className="category-chart">

        <ResponsiveContainer width="100%" height={260}>

          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 15,
              right: 20,
              left: 5,
              bottom: 10
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="#E2E8F0"
            />

            <XAxis
              type="number"
              allowDecimals={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={120}
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="total"
              name="Ocorrências"
              radius={[0, 6, 6, 0]}
              barSize={24}
            >

              {data.map((item, index) => (
                <Cell
                  key={item.name}
                  fill={colors[index % colors.length]}
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="category-chart-footer">
        <span>Total de ocorrências</span>
        <strong>{total}</strong>
      </div>

    </div>
  );
}