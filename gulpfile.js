var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss',
    /* less || scss || sass || styl */
    columns: 12,
    /* number of grid columns */
    offset: '30px',
    /* gutter width px || % || rem */
    mobileFirst: false,
    /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px',
        /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px',
            /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
    }
};

smartgrid('./scss', settings);


function cssStyle(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            // outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());

    done();
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000,
        // online: false,
        notify: false,
        tunnel: true,
        tunnel: 'projectname', //demonstration page: http://projectname.localtunnel.me
    });

    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function watchSass() {
    gulp.watch("./scss/**/*", cssStyle);
}

function watchFiles() {
    gulp.watch("./scss/**/*", cssStyle);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.js*", browserReload);
    gulp.watch("./**/*.php*", browserReload);

}

gulp.task(cssStyle);
gulp.task('default', gulp.parallel(sync, watchFiles))
gulp.task(sync);

// exports.default = defaultTaskgu