//  AREA DAS CONSTANTES E VARIÁVEIS DA TAREFA
    const gulp = require("gulp");
    const sass = require("gulp-sass")(require("sass"));

//   AREA DA FUNÇÃO DA TAREFA
function Styles() {
    console.log("\nAtualizações enviadas para a pasta dist\n");
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));

}

// REGRAS DE COMO SERÃO CHAMADAS AS FUNÇÕES
exports.default = Styles;
exports.watch = function(){
    gulp.watch("./src/styles/*.scss", gulp.parallel(Styles));
}
