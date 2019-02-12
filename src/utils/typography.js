import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  googleFonts: [
    {
      name: 'Abril Fatface',
      styles: [
        '400',
      ]
    },
    {
      name: 'Playfair Display',
      styles: [
        '700i',
      ]
    },
    {
      name: 'Roboto',
      styles: [
        '400',
      ]
    },
  ],
  includeNormalize: true,
});

export default typography;
