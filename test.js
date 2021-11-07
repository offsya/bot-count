require('shelljs/global');


// Sync call to exec()
var version = exec('node --version', {silent:true}).output;

// Async call to exec()
exec('git add .', function(status, output) {

});
exec('git commit -m '+ Math.random()*Math.random() +'', function(status, output) {

});
exec("git push origin master", function(status, output) {

});
