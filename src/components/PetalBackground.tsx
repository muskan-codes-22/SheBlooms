import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  rotation: number;
}

export const PetalBackground: React.FC = () => {
  // Generate a stable set of soft petals
  const petals = useMemo<Petal[]>(() => {
    const colors = [
      'rgba(255, 214, 228, 0.45)', // Petal pink
      'rgba(214, 69, 127, 0.25)',  // Raspberry soft
      'rgba(155, 127, 209, 0.25)', // Soft violet
      'rgba(237, 182, 80, 0.22)',  // Marigold soft
      'rgba(237, 229, 250, 0.55)', // Lavender mist
    ];

    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.floor(Math.random() * 96) + 2,
      size: Math.floor(Math.random() * 16) + 12,
      duration: Math.floor(Math.random() * 14) + 12,
      delay: Math.random() * 8,
      color: colors[i % colors.length],
      rotation: Math.floor(Math.random() * 360),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft blurred ambient glow circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-petal/40 dark:bg-pink-950/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-lavender/50 dark:bg-purple-950/25 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-marigold/15 dark:bg-yellow-950/15 blur-3xl" />

      {/* Falling drifting SVG flower petals */}
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute opacity-0"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animation: `petalDrift ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full filter drop-shadow-sm"
          >
            <path
              d="M15 0C25 10 30 25 15 40C0 25 5 10 15 0Z"
              fill={petal.color}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

