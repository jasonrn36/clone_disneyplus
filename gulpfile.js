//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { exec } = require('child_process');

//  TAREFA: Compilar SCSS
function Styles() {
return gulp.src('./src/Estilos/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

//  TAREFA: Comprimir imagens com Sharp via compressor.js
function compressImages(done) {
exec('node ./src/js/compressor.js', (err, stdout, stderr) => {
    if (err) {
    console.error(`Erro: ${stderr}`);
    } else {
    console.log(stdout);
    }
    done();
});
}

const svgmin = require('gulp-svgmin');

function compressSVGs() {
return gulp.src('./src/Images/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('./dist/images'));
}




//  TAREFA: Watch
function watchFiles() {
    gulp.watch('./src/Estilos/*.scss', gulp.parallel(Styles));
    gulp.watch('./src/Images/**/*.{jpg,jpeg,png,gif}', gulp.parallel(compressImages));
    gulp.watch('./src/Images/**/*.svg', gulp.parallel(compressSVGs));
}

//  EXPORTA AS TAREFAS
exports.default = gulp.parallel(Styles, compressImages, compressSVGs);
exports.watch = watchFiles;