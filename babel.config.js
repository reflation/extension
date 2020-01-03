module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'last 5 Firefox versions, last 5 Chrome versions',
      },
    ],
    [
      '@babel/preset-react',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment',
        throwIfNamespace: false,
      }
    ],
    'linaria/babel',
  ],
}
