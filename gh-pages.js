import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/pezzabros/homepage-2022.git',
  user: {
   name: 'Daniele Pezzatini', // update to use your name
   email: 'pezzabros@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);