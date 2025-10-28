//  AREA DAS CONSTANTES
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass)  (sass)


//AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    return gulp.src('./src/Estilos/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./dist/css'))

}



    exports.default = Styles; // Esta tarefa não deve ser apagada ela é a padrão
        exports.watch = function(){

        gulp.watch('./src/Estilos/*.scss', gulp.parallel(Styles))

}