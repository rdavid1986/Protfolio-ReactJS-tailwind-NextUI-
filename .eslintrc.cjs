module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 4],  // Indentación de 4 espacios
    'jsx-quotes': ['off'],  // Permitir cualquier tipo de comillas en JSX
    'semi': ['off'],  // Hacer que los puntos y comas sean opcionales
    'quotes': ['off'],  // Permitir cualquier tipo de comillas en JS
    'no-multiple-empty-lines': ['off'],  // Permitir múltiples líneas en blanco
    'padded-blocks': ['off'],  // Permitir bloques con líneas en blanco
    'react/jsx-indent': ['error', 4],  // Indentación en JSX de 4 espacios
    'react/jsx-indent-props': ['error', 4],  // Indentación de props en JSX de 4 espacios
    'space-before-function-paren': ['off']  // Desactivar espacio antes de paréntesis en funciones
  },
}
