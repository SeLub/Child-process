// Following code snippet will print out recursively all items under current folder

const exec = require('child_process').exec;
exec('for i in $( ls -LR ); do echo item: $i; done', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    console.log('stderr ', stderr);
});