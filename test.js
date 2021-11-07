const { exec } = require("child_process");

exec("git add .", (error) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    }
    console.log(`git add .`);
});
exec("git commit -m 'test'", (error) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    }
    console.log(`git commit`);
});
exec("git push origin master", (error) => {
    if (error) {
        console.log(`error: ${error}`);
        return;
    }
    console.log(`git push`);
});