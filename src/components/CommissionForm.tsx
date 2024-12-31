import React from 'react';
import { Target, Briefcase, Calculator, UserPlus } from 'lucide-react';
import { FormField } from './ui/FormField';
import { Select } from './ui/Select';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface CommissionFormProps {
  salaryGrade: string;
  salesMade: string;
  target: string;
  isNewStarter: boolean;
  salaryOptions: Array<{ value: string; label: string }>;
  onSalaryGradeChange: (value: string) => void;
  onSalesMadeChange: (value: string) => void;
  onTargetChange: (value: string) => void;
  onNewStarterChange: (value: boolean) => void;
  onCalculate: () => void;
}

export const CommissionForm: React.FC<CommissionFormProps> = ({
  salaryGrade,
  salesMade,
  target,
  isNewStarter,
  salaryOptions,
  onSalaryGradeChange,
  onSalesMadeChange,
  onTargetChange,
  onNewStarterChange,
  onCalculate,
}) => {
  return (
    <div className="space-y-6">
      <div className="relative h-40 mb-8 rounded-2xl overflow-hidden">
        <img
          src="https://octoenergy-production-media.s3.amazonaws.com/images/savings__1_.width-800.png"
          alt="Calculator illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <FormField 
        label="Salary Grade" 
        icon={<Briefcase className="w-4 h-4 text-[#e561a0]" />}
      >
        <Select
          value={salaryGrade}
          onChange={(e) => onSalaryGradeChange(e.target.value)}
          options={salaryOptions}
        />
      </FormField>

      <FormField 
        label="Sales Made" 
        icon={<Target className="w-4 h-4 text-[#e561a0]" />}
      >
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={salesMade}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            onSalesMadeChange(value);
          }}
          placeholder="Enter number of sales"
        />
      </FormField>

      <FormField 
        label="Monthly Target" 
        icon={<Calculator className="w-4 h-4 text-[#e561a0]" />}
      >
        <Input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={target}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            onTargetChange(value);
          }}
          placeholder="Enter monthly target"
        />
      </FormField>

      <FormField 
        label="New Starter?" 
        icon={<UserPlus className="w-4 h-4 text-[#e561a0]" />}
      >
        <Select
          value={isNewStarter.toString()}
          onChange={(e) => onNewStarterChange(e.target.value === 'true')}
          options={[
            { value: 'false', label: 'No' },
            { value: 'true', label: 'Yes' }
          ]}
        />
      </FormField>

      <Button
        onClick={onCalculate}
        className="w-full mt-8 justify-center"
        disabled={!salaryGrade || !salesMade || !target}
      >
        Calculate Commission
      </Button>
    </div>
  );
};