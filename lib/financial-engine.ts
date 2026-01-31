import { PosTransaction } from "./pos-mock";

export function calculatePL(data: PosTransaction[]) {
  const revenue = data.reduce((s, i) => s + i.revenue, 0);
  const cost = data.reduce((s, i) => s + i.cost, 0);

  return {
    revenue,
    cost,
    profit: revenue - cost,
    margin: revenue ? ((revenue - cost) / revenue) * 100 : 0
  };
}
