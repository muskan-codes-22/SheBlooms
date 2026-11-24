import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CycleWheel } from '../components/CycleWheel';
import { useApp } from '../context/AppContext';
import { getStageContent, DEFAULT_STAGE_CONTENT } from '../data/stageContent';

export const CyclePage: React.FC = () => {
  const { stage, stageInfo } = useApp();
  const stageContent = getStageContent(stage);
  const note = stageContent ? stageContent.cycleNote : DEFAULT_STAGE_CONTENT.cycleNote;

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orchid hover:text-raspberry transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Learning Hub</span>
          </Link>
        </div>

        {/* Stage-Aware Context Callout Note */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-lavender/40 dark:bg-plum-deep/50 border border-petal/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-base">{stageInfo?.icon || '🌸'}</span>
              <h3 className="font-serif font-bold text-sm sm:text-base text-plum dark:text-pink-100">
                {note.title}
              </h3>
            </div>
            <p className="text-plum/80 dark:text-pink-200/90 leading-relaxed max-w-4xl">
              {note.text}
            </p>
          </div>
          <div className="text-[11px] font-semibold text-orchid dark:text-pink-300 italic shrink-0">
            {note.citationHint}
          </div>
        </div>

        {/* The Cycle Wheel Component */}
        <CycleWheel />

      </div>
    </div>
  );
};
