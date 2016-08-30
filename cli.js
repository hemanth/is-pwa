#!/usr/bin/env node
'use strict';
const meow = require('meow');
const npm = require("npm");
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

const launchChrome = () => npm.load(function (err) {
  if (err) throw new Error(err);
  npm.commands.runScript(["lunch-chrome"], function (err, data) {
    if (err) throw new Error(err);
    isPwa(cli.input[0])
    	.then(console.log)
    	.catch(console.error)

    process.on('exit', function() {
      console.log('process is about to exit, kill ffmpeg');
      child_process.kill();
    });
  })
  npm.registry.log.on("log", function (message) { })
});

launchChrome();