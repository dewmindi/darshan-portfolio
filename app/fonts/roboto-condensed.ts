// app/fonts/roboto-condensed.ts
import localFont from 'next/font/local';

export const robotoCondensed = localFont({
  src: [
    {
      path: './RobotoCondensed-VariableFont_wght.ttf',
      weight: '100 900', // This range covers all weights from Thin (100) to Black (900)
      style: 'normal',
    },
    {
      path: './RobotoCondensed-Italic-VariableFont_wght.ttf',
      weight: '100 900', // This range covers all weights from Thin (100) to Black (900)
      style: 'italic',
    },
  ],
  variable: '--font-roboto-condensed', // Optional: Define a CSS variable for easier use
  display: 'swap', // Recommended for performance (prevents FOIT)
});