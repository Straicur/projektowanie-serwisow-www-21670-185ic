"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const merge = require("merge-stream");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean vendor
function clean() {
  return del(["./vendor/"]);
}

// Bring third party dependencies from node_modules into vendor directory
function modules() {
  // Bootstrap
  var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
    .pipe(gulp.dest('./vendor/bootstrap'));
  // jQuery
  var jquery = gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'));
  return merge(bootstrap, jquery);
}

// Watch files
function watchFiles() {
  gulp.watch("./**/*.css", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
}

// Define complex tasks
const vendor = gulp.series(clean, modules);
const build = gulp.series(vendor);
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.clean = clean;
exports.vendor = vendor;
exports.build = build;
exports.watch = watch;
exports.default = build;
function odliczanie()
{
    var dzisiaj = new Date();
         
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();
         
    var godzina = dzisiaj.getHours();
    if (godzina<10) godzina = "0"+godzina;
         
    var minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta = "0"+minuta;
         
    var sekunda = dzisiaj.getSeconds();
    if (sekunda<10) sekunda = "0"+sekunda;
         
    document.getElementsByID("zegarek").innerHTML = 
     dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
          
     setTimeout("odliczanie()",1000);
}