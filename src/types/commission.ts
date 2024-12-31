export interface SalaryLevels {
  base: number;
  pro: number;
  master: number;
}

export interface CalculationResults {
  commission: number;
  percentageOfTarget: number;
}

export interface FormattedResults {
  salary: string;
  commission: string;
  total: string;
  averagePerSale: string;
  percentageOfTarget: string;
}