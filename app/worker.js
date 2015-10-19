console.log('worker loading...');
importScripts('jspm_packages/system.js');
importScripts('config.js');
System.import('./worker-main');