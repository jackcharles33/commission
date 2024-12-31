interface ProgressBarProps {
  percentage: number;
  isNewStarter: boolean;
  target: string;
  salesMade: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  percentage, 
  isNewStarter, 
  target,
  salesMade 
}) => {
  const getMotivationalMessage = (percentage: number, isNewStarter: boolean) => {
    if (!isNewStarter && percentage < 50) {
      return "You need to reach 50% of your target to start earning commission. Keep pushing!";
    }
    
    if (percentage >= 100) {
      return "Amazing work! You've hit your target! 🎉";
    }
    
    if (percentage >= 75) {
      return "So close! Just a few more sales to hit your target!";
    }
    
    if (percentage >= 50) {
      return "You're earning commission! Keep the momentum going!";
    }
    
    return "You're making progress! Keep going!";
  };

  const remainingSales = target && salesMade 
    ? Math.max(0, parseInt(target) - parseInt(salesMade))
    : 0;

  return (
    <div className="animate-slide-up">
      <h3 className="text-lg font-medium text-[#ffffff] mb-4">Target Progress</h3>
      <div className="h-3 bg-[#1a1528] rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-[#e561a0] transition-all duration-500"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-white">
          {percentage < 100 
            ? `${remainingSales} more ${remainingSales === 1 ? 'sale' : 'sales'} needed to reach target`
            : 'Target achieved! Great work! 🎉'}
        </p>
        <p className="text-sm text-[#a8a4af] italic">
          {getMotivationalMessage(percentage, isNewStarter)}
        </p>
      </div>
    </div>
  );
};