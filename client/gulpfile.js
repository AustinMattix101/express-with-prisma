import { task, src, dest } from 'gulp';
import ts from 'gulp-typescript';
 
task('default', function () {
    return src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(dest('built/local'));
});