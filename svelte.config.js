// svelte.config.js
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    paths: {
			base: '',
		},
		appDir: 'internal',
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    })
  }
};