/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        raspberry: {
          DEFAULT: '#D6457F',
          dark: '#B82E64',
          light: '#E86B9D',
        },
        orchid: {
          DEFAULT: '#8B4F7E',
          dark: '#6E3A63',
          light: '#A86C9B',
        },
        violet: {
          DEFAULT: '#9B7FD1',
          dark: '#7D5EB8',
          light: '#B7A1E3',
        },
        lavender: {
          DEFAULT: '#EDE5FA',
          light: '#F5F0FD',
          dark: '#DDD1F5',
        },
        blush: {
          DEFAULT: '#FFF1F5',
          light: '#FFF9FB',
          dark: '#FFE2EC',
        },
        petal: {
          DEFAULT: '#FFD6E4',
          light: '#FFEBF1',
          dark: '#FCAFC8',
        },
        coral: {
          DEFAULT: '#F27A6B',
          light: '#FA9F94',
          dark: '#DB594A',
        },
        marigold: {
          DEFAULT: '#EDB650',
          light: '#F4CA7B',
          dark: '#D49B33',
        },
        plum: {
          DEFAULT: '#3B1F3A',
          deep: '#231123',
          night: '#160917',
          soft: '#5E385D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['Nunito', '"DM Sans"', 'sans-serif'],
        heading: ['Quicksand', '"Playfair Display"', 'sans-serif'],
      },
      boxShadow: {
        'soft-pink': '0 10px 30px -10px rgba(214, 69, 127, 0.18)',
        'soft-purple': '0 10px 30px -10px rgba(155, 127, 209, 0.22)',
        'glow-pink': '0 0 25px rgba(214, 69, 127, 0.35)',
        'glow-orchid': '0 0 25px rgba(139, 79, 126, 0.3)',
      },
      borderRadius: {
        '4xl': '1.25rem', // 20px (crisper, previously 36px)
        '3xl': '1rem',    // 16px (crisper, previously 28px)
        '2xl': '0.75rem', // 12px (crisper)
        'xl': '0.5rem',   // 8px (crisp modern corner)
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'petal-drift': 'petalDrift 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        petalDrift: {
          '0%': { transform: 'translateY(-10%) rotate(0deg) translateX(0px)', opacity: '0' },
          '15%': { opacity: '0.8' },
          '85%': { opacity: '0.7' },
          '100%': { transform: 'translateY(110vh) rotate(360deg) translateX(50px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
