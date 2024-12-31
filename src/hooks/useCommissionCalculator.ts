import { useState, useEffect } from 'react';
import { SALARY_LEVELS } from '../utils/calculationUtils';
import type { FormattedResults } from '../types/commission';

export function useCommissionCalculator() {
  const [salaryGrade, setSalaryGrade] = useState('');
  const [salesMade, setSalesMade] = useState('');
  const [target, setTarget] = useState('');
  const [isNewStarter, setIsNewStarter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const salaryOptions = [
    { value: 'base', label: `Base - £${SALARY_LEVELS.base.toLocaleString()}` },
    { value: 'pro', label: `Pro - £${SALARY_LEVELS.pro.toLocaleString()}` },
    { value: 'master', label: `Master - £${SALARY_LEVELS.master.toLocaleString()}` }
  ];

  const calculateResults = (): FormattedResults => {
    const annualSalary = salaryGrade ? SALARY_LEVELS[salaryGrade as keyof typeof SALARY_LEVELS] : 0;
    const monthlySalary = annualSalary / 12;
    
    const commission = !salesMade || !target ? 0 : 
      (parseInt(salesMade) / parseInt(target)) * 833;
    
    return {
      salary: monthlySalary.toLocaleString(),
      commission: commission.toFixed(2),
      total: (monthlySalary + commission).toLocaleString(),
      percentageOfTarget: !target ? '0' : 
        `${((parseInt(salesMade) / parseInt(target)) * 100).toFixed(1)}`
    };
  };

  const handleCalculate = () => {
    if (salaryGrade && salesMade && target) {
      const results = calculateResults();
      const targetAchieved = parseFloat(results.percentageOfTarget) >= 100;
      setShowConfetti(targetAchieved);
      setShowResults(true);
    }
  };

  // Reset confetti after animation
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return {
    salaryGrade,
    setSalaryGrade,
    salesMade,
    setSalesMade,
    target,
    setTarget,
    isNewStarter,
    setIsNewStarter,
    salaryOptions,
    showResults,
    showConfetti,
    handleCalculate,
    results: calculateResults()
  };
}