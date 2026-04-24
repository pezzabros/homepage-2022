import { publish } from 'gh-pages';

publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/pezzabros/homepage-2022.git',
  user: {
    name: 'Daniele Pezzatini',
    email: 'pezzabros@gmail.com'
  },
  dotfiles: true
}).then(() => {
  console.log('Deploy Complete!');
}).catch((err) => {
  console.error('Deploy failed:', err);
  process.exit(1);
});