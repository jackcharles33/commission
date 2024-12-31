import { FormattedResults } from '../types/commission';

interface ResultsDisplayProps {
  results: FormattedResults;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up">
    {[
      { label: 'Monthly Salary', value: results.salary, icon: '£' },
      { label: 'Commission', value: results.commission, icon: '£' },
      { label: 'Total Pre-Tax', value: results.total, icon: '£', highlight: true }
    ].map(({ label, value, icon, highlight }) => (
      <div 
        key={label} 
        className={`bg-[#281c34] rounded-3xl p-6 border border-purple-700/30 ${
          highlight ? 'col-span-full md:col-span-1' : ''
        }`}
      >
        <div className="flex flex-col space-y-2">
          <span className="text-sm font-medium text-[#a8a4af]">{label}</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-white text-lg">{icon}</span>
            <span className="text-white text-3xl font-bold">{value}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);