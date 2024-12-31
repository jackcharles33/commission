import { CalculationResults } from '../types/commission';

export const SALARY_LEVELS = {
  base: 24300,
  pro: 27800,
  master: 29100
};

export const calculateCommission = (
  salesMade: string,
  target: string,
  isNewStarter: boolean
): CalculationResults => {
  if (!salesMade || !target) return { commission: 0, percentageOfTarget: 0 };
  
  const salesNum = parseInt(salesMade);
  const targetNum = parseInt(target);
  const percentageOfTarget = (salesNum / targetNum) * 100;

  if (!isNewStarter && percentageOfTarget < 50) {
    return { commission: 0, percentageOfTarget };
  }

  if (salesNum < targetNum) {
    if (isNewStarter || percentageOfTarget >= 50) {
      const commission = 833 * (percentageOfTarget / 100);
      return { commission, percentageOfTarget };
    }
    return { commission: 0, percentageOfTarget };
  }
  
  const commission = 833 * (percentageOfTarget / 100);
  return { commission, percentageOfTarget };
};