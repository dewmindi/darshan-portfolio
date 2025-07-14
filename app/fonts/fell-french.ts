// app/fonts/roboto-condensed.ts
import localFont from 'next/font/local';

export const fellFrench = localFont({
  src: [
    {
      path: './IMFellFrenchCanonSC-Regular.ttf',
      weight: '100 900', // This range covers all weights from Thin (100) to Black (900)
      style: 'normal',
    },
  ],
  variable: '--font-fell-french', // Optional: Define a CSS variable for easier use
  display: 'swap', // Recommended for performance (prevents FOIT)
});