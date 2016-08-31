#!/usr/bin/env node
'use strict';
const meow = require('meow');
const spawn = require('cross-spawn');
const isPwa = require('./');

const cli = meow([
	'Usage',
	'  $ is-pwa [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ is-pwa',
	'  unicorns & rainbows',
	'  $ is-pwa ponies',
	'  ponies & rainbows'
]);

spawn.sync(
  'npm', 'explore -g lighthouse -- npm run chrome&'.split(' '),
  {stdio: 'inherit', env: process.env}
);

isPwa(cli.input[0])
  .then(score => {
    if(score) {
      console.log(`It is a PWA! With a lighthouse score of: ${score}`);
    } else {
      console.error('Sorry, it\'s not a PWA');
    }
  })
  .catch(err => {
    if (err.code === 'ECONNREFUSED') {
      console.error('Unable to connect to Chrome. Please run Chrome w/ debugging port 9222 open:');
      console.error('    npm explore -g lighthouse -- npm run chrome');
    } else {
      console.error('Runtime error encountered:', err);
      console.error(err.stack);
    }
    process.exit(1);
  });