var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var paths = require('../paths');
//var bundles = require('../bundles.json');
//var resources = require('../export.json');
var octo = require('@octopusdeploy/gulp-octo');
var bump = require('gulp-bump');

// deletes all files in the output path
gulp.task('clean-export', function() {
  return gulp.src([paths.exportSrv])
    .pipe(vinylPaths(del));
});

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', function() {
  var newVersion = '0.0.1';
  if(process.env.build_number!=null)
  {
    newVersion = process.env.build_number;
  }
  return gulp.src(['./package.json'])
    .pipe(bump({version: newVersion})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});


gulp.task('export-copy', function() {
  if(process.env.build_number!=null)
  {
  return gulp.src(paths.output+'**/*', {base: './'})
    .pipe(octo.pack())
    .pipe(gulp.dest(paths.exportSrv));
  }
  else {
    return gulp.src(paths.output+'**/*', {base: '.'})
      .pipe(gulp.dest(paths.exportSrv));
  }

});


// use after prepare-release
gulp.task('export', function(callback) {
  return runSequence(
    'bump-version',
    'clean-export',
    'export-copy',
    callback
  );
});
