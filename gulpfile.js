//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)

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


// Tarefa que assiste os arquivos separadamente
function watchFiles() {
  gulp.watch('./src/Estilos/*.scss', Styles);      // Só recompila SCSS quando necessário
  gulp.watch('./src/js/**/*.js', copiarJS);        // Só copia JS quando necessário
}

//  Tarefa assistir
exports.watch = function() {
    gulp.watch('./', gulp.parallel(Styles, copiarJS));
}

// AREA DE EXECUÇÃO OU EXPORTAÇÃO DAS TAREFAS
exports.default = gulp.series(Styles, copiarJS);           // Build completo
exports.watch = gulp.series(exports.default, watchFiles);  // Build + Watch