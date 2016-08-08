/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
<<<<<<< HEAD
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
=======

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };
<<<<<<< HEAD
=======

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
<<<<<<< HEAD
=======

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
<<<<<<< HEAD
=======

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
<<<<<<< HEAD
=======

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
<<<<<<< HEAD
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
=======

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
  var config = {
    map: map,
    packages: packages
  };
<<<<<<< HEAD
  System.config(config);
=======

  System.config(config);

>>>>>>> 4a3262eca04fe67c5a57800b60447f591b543f3d
})(this);
