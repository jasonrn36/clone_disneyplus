//  AREA DAS CONSTANTES
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass')); // ATENÇÃO O GULP-SASS E DEPOIS O SASS EXEMPLO (gulp-sass) (sass)
const { exec } = require('child_process');

//  AREA DAS TAREFAS OU FUNÇÕES
//  ESTA TAREFA CONVERTE SCSS EM CSS
function Styles() {
    return gulp.src('./src/Estilos/*.scss').pipe(sass({outputStyle:'compressed'})).pipe(gulp.dest('./dist/css'))

}

// Caminhos
const paths = {
scripts: {
    src: './src/js/*.js',
    dest: './dist/js'
}
};

// Tarefa para minificar JS
function compressJS() {
return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
}


//Tarefa para executar o compressor.js
    gulp.task('compress-images', (done) => {
    exec('node ./src/js/compressor.js', (err, stdout, stderr) => {
        if (err) {
        console.error(`Erro: ${stderr}`);
        } else {
        console.log(stdout);
    }
done(); })
});


    exports.default = gulp.series(Styles, 'compress-images',compressJS); // Usado para criar os arquivos apos cada modificação

    exports.watch = function() { // Usado para assistir as modificações enquanto trabalha

    gulp.watch('../src/Estilos/*.scss', gulp.series(Styles))
    gulp.watch('./src/Images/*.scss', gulp.series('compress-images'));
    gulp.watch('./src/js/*.js', gulp.series(compressJS));
    
}