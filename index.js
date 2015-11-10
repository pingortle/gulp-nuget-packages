(function () {
    var gulp = require('gulp'),
        util = require('gulp-util'),
        shell = require('gulp-shell'),
        request = require('request'),
        fs = require('fs');

    const PLUGIN_NAME = "gulp-nuget-packages";

    function gulpNugetPackages(config){

        if(!config.solutionPath || config.solutionPath == ""){
            throw new util.PluginError(PLUGIN_NAME, "solution path was not provided");
        }
        if(!config.sln || config.sln == ""){
            throw new util.PluginError(PLUGIN_NAME, "sln file was not provided");
        }
        if(!config.nugetPath || config.nugetPath == ""){
            throw new util.PluginError(PLUGIN_NAME, "path to nuget.exe was not provided");
        }

        var cmds = [
            'nuget restore "' + config.solutionPath + '/' + config.sln  +'"'
        ];
        var conf = {
            cwd: config.nugetPath
        };

        return gulp.src('').pipe(shell(cmds, conf));
    }

    module.exports = gulpNugetPackages;
})();
