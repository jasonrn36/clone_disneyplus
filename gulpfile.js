//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)
const imagemin = require('gulp-imagemin');

//AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    return gulp.src('./src/Estilos/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./dist/css'))

}
// Tarefa para copiar JS
function copiarJS() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
}

function images() {
    return gulp.src('./src/images/**/*').pipe(imagemin()).pipe(gulp.dest('./dist/images'))

}

//  EXECUÇÃO DAS TAREFAS
exports.default = gulp.parallel(Styles,images);
    exports.watch = function(){
        gulp.watch('./src/Estilos/*.scss', gulp.parallel(Styles,copiarJS,images))
        gulp.watch('./src/js/*.js', gulp.parallel(copiarJS))
            gulp.watch('./src/images/**/*', gulp.parallel(images))

    }