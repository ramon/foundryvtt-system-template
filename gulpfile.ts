const gulp = require("gulp")
const ts = require("gulp-typescript")
const less = require("gulp-less")

const project = ts.createProject("tsconfig.json")


gulp.task("buildTS", () => {
    return gulp.src("src/**/*.ts")
        .pipe(project())
        .pipe(gulp.dest("dist/"))
})

gulp.task("buildLESS", () => {
    return gulp.src("src/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist/"))
})

gulp.task("copyFiles", async () => {
    return new Promise<void>((resolve, reject) => {
        gulp.src("README.md").pipe(gulp.dest("dist/"))
        gulp.src("LICENSE").pipe(gulp.dest("dist/"))
        gulp.src("src/system.json").pipe(gulp.dest("dist/"))
        gulp.src("src/template.json").pipe(gulp.dest("dist/"))
        gulp.src("src/lang/**").pipe(gulp.dest("dist/lang/"))
        gulp.src("src/templates/**").pipe(gulp.dest("dist/templates/"))
        gulp.src("src/assets/**").pipe(gulp.dest("dist/assets/"))
        resolve()
    })
})

gulp.task("build", gulp.parallel("buildTS", "buildLESS", "copyFiles"));

gulp.task("build:watch", () => {
    gulp.watch('src/**/*.ts', { ignoreInitial: false }, gulp.series("buildTS"));
    gulp.watch('src/**/*.less', { ignoreInitial: false }, gulp.series("buildLESS"));
    gulp.watch(
        ['src/assets', 'src/lang', 'src/templates', 'src/*.json'],
        { ignoreInitial: false },
        gulp.series("copyFiles")
    )
})