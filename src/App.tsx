import React from 'react';
import { Card } from './components/ui/Card';
import { ProgressBar } from './components/ProgressBar';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Header } from './components/Header';
import { CommissionForm } from './components/CommissionForm';
import { Confetti } from './components/Confetti';
import { useCommissionCalculator } from './hooks/useCommissionCalculator';

function App() {
  const {
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
    results
  } = useCommissionCalculator();

  return (
    <div className="min-h-screen bg-[#100030] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Confetti isActive={showConfetti} />
        <Header />
        <Card className="animate-fade-in">
          <CommissionForm
            salaryGrade={salaryGrade}
            salesMade={salesMade}
            target={target}
            isNewStarter={isNewStarter}
            salaryOptions={salaryOptions}
            onSalaryGradeChange={setSalaryGrade}
            onSalesMadeChange={setSalesMade}
            onTargetChange={setTarget}
            onNewStarterChange={setIsNewStarter}
            onCalculate={handleCalculate}
          />
          
          {showResults && (
            <>
              <div className="mt-8">
                <ProgressBar 
                  percentage={parseFloat(results.percentageOfTarget)} 
                  isNewStarter={isNewStarter}
                  target={target}
                  salesMade={salesMade}
                />
              </div>
              <div className="mt-8">
                <ResultsDisplay results={results} />
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;