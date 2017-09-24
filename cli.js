#!/usr/bin/env node

'use strict';
const meow = require('meow');
const isPwa = require('./');
const cli = meow(['Usage', '', 'Make sure you have ran `npm explore -g lighthouse -- npm run chrome&`', '', '  $ is-pwa [input]', '', 'Examples', '  $ is-pwa https://jsfeatures.in', '   It is a PWA! With a lighthouse score of: 80', '  ', '  $ is-pwa https://h3manth.com', '   Sorry, it\'s not a PWA :(', '  ']);
// Next version?
//const spawn = require('child_process').spawn;
// const chrome = spawn(
//   'npm', 'explore -g lighthouse -- npm run chrome > /dev/null 2>&1 &'.split(' '),
//   {stdio: ['ignore'], env: process.env}
// );
//var exec = require('child_process').execSync
//exec('./node_modules/lighthouse/lighthouse-core/scripts/launch-chrome.sh > /dev/null 2>&1 &');
// exec('npm', 'explore -g lighthouse -- npm run chrome > /dev/null 2>&1 &'.split(' '))
if (!cli.input[0]) {
  cli.showHelp();
}
isPwa(cli.input[0]).then(score => {
  if (score > 75) {
    console.log(`It is a PWA! With a lighthouse score of: ${score}`);
  } else {
    console.error('Sorry, it\'s not a PWA :(');
  }
  //chrome.kill('SIGHUP');
}).catch(err => {
  if (err.code === 'ECONNREFUSED') {
    console.error('Unable to connect to Chrome. Please run Chrome w/ debugging port 9222 open:');
    console.error('    npm explore -g lighthouse -- npm run chrome');
    console.error('And then run:');
    console.error(`is-pwa ${cli.input[0]}`);
  } else {
    console.error('Runtime error encountered:', err);
    console.error(err.stack);
  }
  process.exit(1);
});
