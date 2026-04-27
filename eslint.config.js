// @ts-check
import { defineConfig } from '@debbl/eslint-config'

export default defineConfig(
  {
    ignores: {
      files: ['src/components/ui', 'src/components/animate-ui'],
    },
    typescript: true,
    react: {
      next: true,
      compiler: true,
    },
    tailwindcss: 'prettier',
  },
  {
    rules: {
      'react-dom/no-unknown-property': 'off',
    },
  },
)
