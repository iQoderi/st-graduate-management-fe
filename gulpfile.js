/**
 * Created by qoder on 16/9/20.
 */
const gulp = require('gulp');
const qiniu = require('gulp-qiniu');
const sftp = require('gulp-sftp');
const gzip = require('gulp-gzip');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const inject = require('gulp-inject');
const open = require('open');
const secrt = require('./secrt');


const config = {
  qiniu: {
    ak: secrt.qiniu.ak,
    sk: secrt.qiniu.sk,
    bucket: secrt.qiniu.bucket,
    url: secrt.qiniu.url,
    dir: secrt.qiniu.dir
  }
};

const basePaths = {
  'src': 'src',
  'dist': 'dist'
};

const remoteServer = {
  host: secrt.remoteServer.host,
  // port: secrt.remoteServer.port,
  user: secrt.remoteServer.user,
  pass: secrt.remoteServer.pass,
  remoteDir: secrt.remoteServer.remoteDir
};

const path = {
  image: './src/images/*',
  minifyImage: './src/images/minify',
  spriteImage: './src/images/sprites',
  spriteCss: './src/style/sprite'
};

const distFile = {
  assets: './dist/assets/',
  static: './dist/assets/*.*',
  html: './dist/*.html',
  js: './dist/assets/*.js'
};


gulp.task('uploadStatic', ()=> {
  return gulp.src(distFile.static)
    .pipe(qiniu({
      accessKey: config.qiniu.ak,
      secretKey: config.qiniu.sk,
      bucket: config.qiniu.bucket,
      private: false
    }, {
      dir: config.qiniu.dir
    }))
});

gulp.task('inject', ()=> {
  const sources = gulp.src([distFile.assets + 'vendor.*.js', distFile.assets + 'app.*.js', distFile.assets + 'style.*.css']);
  return gulp.src(distFile.html)
    .pipe(inject(sources, {
      transform: (filepath)=> {
        if (filepath.slice(-4) === '.css') {
          return `<link rel="stylesheet" href='${config.qiniu.url}${config.qiniu.dir}${filepath.split('/')[filepath.split('/').length - 1]}'/>`
        }
        if (filepath.slice(-3) === '.js') {
          return `<script src='${config.qiniu.url}${config.qiniu.dir}${filepath.split('/')[filepath.split('/').length - 1]}'></script>`
        }
      }
    }))
    .pipe(gulp.dest(basePaths.dist));
});

gulp.task('uploadHtml', ['inject'], ()=> {
  return gulp.src(distFile.html, {
    buffer: false
  })
    .pipe(sftp({
      host: remoteServer.host,
      user: remoteServer.user,
      pass: remoteServer.pass,
      // port: remoteServer.port,
      remotePath: remoteServer.remoteDir,
    }))
});


gulp.task('minifyImage', ()=> {
  return gulp.src(path.image)
    .pipe(imagemin())
    .pipe(gulp.dest(path.minifyImage))
});

gulp.task('upload', function (callback) {
  runSequence(
    'uploadHtml',
    ['uploadStatic'],
    callback)

});

gulp.task('default', ()=> {

});
