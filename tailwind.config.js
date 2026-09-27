/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        'surface-1': 'rgb(var(--color-surface-1) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        'surface-hover': 'rgb(var(--color-surface-hover) / <alpha-value>)',
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          subdued: 'rgb(var(--color-border-subdued) / <alpha-value>)',
          active: 'rgb(var(--color-accent) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--color-text-tertiary) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
          subtle: 'rgb(var(--color-accent) / 0.16)',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        heading: '-0.025em',
        'heading-tight': '-0.03em',
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '14px',
        control: '8px',
      },
      boxShadow: {
        'card-hover': '0 8px 30px -8px rgb(var(--color-accent) / var(--shadow-opacity-soft))',
        glow: '0 0 24px rgb(var(--color-accent) / var(--shadow-opacity-glow))',
        'glow-strong': '0 0 32px rgb(var(--color-accent) / var(--shadow-opacity-glow-strong))',
      },
      height: {
        navbar: '64px',
      },
    },
  },
  plugins: [],
}