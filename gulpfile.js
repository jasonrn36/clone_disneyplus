//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)

//AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    console.log("A tarefa Converteu o scss em css")
    return gulp.src('./src/Estilos/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./dist/css'))

}
// Tarefa para copiar JS
function copiarJS() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'));
}

//  Tarefa assistir
exports.watch = function() {
    gulp.watch('./src/Estilos', gulp.series(Styles, copiarJS));
}

// AREA DE EXECUÇÃO OU EXPORTAÇÃO DA TAREFA
exports.default = Styles; //Aqui deve ser digitado o nome da função
// Tarefa em série: primeiro Sass, depois JS
//exports.build = gulp.series(Styles, copiarJS);