/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './content/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        // Zeus/Sky - Primary
        'zeus-primary': '#1e40af',
        'zeus-secondary': '#3b82f6',
        'zeus-accent': '#fcd34d',
        // Mount Olympus - Neutrals
        'olympus-stone': '#f3f4f6',
        'olympus-granite': '#6b7280',
        'olympus-obsidian': '#111827',
        // Divine Power - Accents
        'lightning-gold': '#fbbf24',
        'thunder-purple': '#8b5cf6',
        'storm-cyan': '#06b6d4',
        // Semantic
        'success-laurel': '#10b981',
        'warning-bronze': '#f59e0b',
        'error-crimson': '#ef4444',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'lightning-pattern': "url('/images/greek-patterns/lightning.svg')",
        'olympus-gradient': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
