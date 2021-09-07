let {src, dest} = require('gulp');

function default_task(){
    return src('./src/*.html')
    .pipe(dest('sp_For_gulp'))
}

exports.default = default_task;


let uglify = require('gulp-uglify');

function uglify_task(){
    return src("./src/*.js")
    .pipe(uglify())
    .pipe(dest("sp_For_gulp"))
}

exports.uglify = uglify_task;


function css_all(){
    return src('./src/*.css')
    .pipe(dest('sp_For_gulp'))
}
exports.allcss = css_all;
