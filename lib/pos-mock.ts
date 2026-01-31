export interface PosTransaction {
  date: string;
  product: string;
  category: string;
  revenue: number;
  cost: number;
}

export const posMockData: PosTransaction[] = [
  { date: "2026-01-01", product: "Menu Ejecutivo", category: "Alimentos", revenue: 35000, cost: 18000 },
  { date: "2026-01-02", product: "Catering", category: "Eventos", revenue: 1200000, cost: 820000 }
];
