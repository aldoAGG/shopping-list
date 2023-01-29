import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode}) => {
  if (command === 'serve') {
    return {
      css: {
        devSourcemap: true
      },
      server: {
        host: true
      }
    }
  } else {
    return {
      base: '',
      plugins: [
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ]
    }
  }
});
