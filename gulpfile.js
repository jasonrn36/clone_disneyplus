//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)
const imagemin = require('gulp-imagemin');

//AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    return gulp.src('./src/Estilos/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}


function images() {
    return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));

}

//  EXECUÇÃO DAS TAREFAS
exports.default = gulp.parallel(Styles, images);

    exports.watch = function() {
        gulp.watch('./src/Estilos/*.scss', gulp.parallel(Styles))

    }