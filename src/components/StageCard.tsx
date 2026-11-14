import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { StageInfo } from '../data/stages';

interface StageCardProps {
  stage: StageInfo;
  isSelected: boolean;
  onSelect: (stageId: StageInfo['id']) => void;
}

export const StageCard: React.FC<StageCardProps> = ({ stage, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(stage.id)}
      className={`group relative cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border flex flex-col justify-between ${
        isSelected
          ? 'glass-card border-raspberry ring-2 ring-raspberry/40 shadow-soft-pink'
          : 'bg-white/70 dark:bg-plum-deep/80 border-petal/80 dark:border-pink-900/40 hover:border-violet/50 hover:shadow-xs'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-3xl">
            {stage.icon}
          </div>
          {isSelected && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-raspberry">
              <CheckCircle2 className="w-3.5 h-3.5 fill-raspberry text-white" />
              <span>Selected</span>
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-lg text-plum dark:text-pink-100 group-hover:text-raspberry transition-colors mb-1 leading-snug">
          {stage.name}
        </h3>
        
        <p className="text-xs text-orchid dark:text-pink-300 leading-relaxed">
          {stage.tagline}
        </p>
      </div>
    </motion.div>
  );
};
