//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)
const imagemin = require('gulp-imagemin');

//AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    return gulp.src('./src/Estilos/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./dist/css'))

}

function MinificaImagem() {
    return gulp.src('./src/Images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/Images'))

}

exports.default = gulp.parallel(Styles, MinificaImagem);

    exports.watch = function(){
        gulp.watch('./src/Estilos/*.scss', gulp.parallel(Styles))

}