import React from 'react';
import { Play, Clock, ExternalLink } from 'lucide-react';
import type { EducationalVideo } from '../data/videos';

interface VideoCardProps {
  video: EducationalVideo;
  onSelect: (video: EducationalVideo) => void;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect, className = '' }) => {
  return (
    <div
      onClick={() => onSelect(video)}
      className={`group cursor-pointer rounded-2xl glass-card border border-petal/80 hover:border-raspberry hover:shadow-soft-pink transition-all overflow-hidden flex flex-col justify-between ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(video);
        }
      }}
      aria-label={`Open video modal for ${video.title}`}
    >
      {/* 16:9 Thumbnail Area with Play Button */}
      <div className="relative aspect-video w-full bg-lavender/60 dark:bg-plum-deep/80 overflow-hidden">
        {/* YouTube Thumbnail */}
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-plum/20 to-transparent transition-opacity group-hover:opacity-90 flex items-center justify-center">
          {/* Centered Play Button */}
          <div className="w-12 h-12 rounded-full bg-raspberry text-white flex items-center justify-center shadow-lg transform group-hover:scale-115 transition-all">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration Badge */}
        <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-plum/80 text-white text-[10px] font-bold tracking-wide flex items-center gap-1 backdrop-blur-xs">
          <Clock className="w-3 h-3 text-petal" />
          {video.duration}
        </span>
      </div>

      {/* Video Details */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Header Chip & Source */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-md bg-petal/50 dark:bg-pink-950/60 text-raspberry dark:text-pink-300 font-bold text-[10px]">
              {video.tag}
            </span>
            <span className="text-[11px] font-medium text-orchid dark:text-pink-300 truncate">
              {video.source}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif font-bold text-sm text-plum dark:text-pink-100 group-hover:text-raspberry transition-colors leading-snug line-clamp-2">
            {video.title}
          </h3>

          {/* Short description preview */}
          <p className="text-xs text-plum/70 dark:text-pink-300/80 mt-1.5 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Card Footer: Click prompt & External Link */}
        <div className="pt-3 mt-3 border-t border-petal/40 flex items-center justify-between text-[11px]">
          <span className="text-raspberry font-semibold flex items-center gap-1 group-hover:underline">
            <Play className="w-3 h-3 fill-raspberry" />
            <span>Click to watch</span>
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-orchid hover:text-raspberry transition-colors font-medium"
            onClick={(e) => e.stopPropagation()}
            aria-label="Open directly on YouTube"
          >
            <span>YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
