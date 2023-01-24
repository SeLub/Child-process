// For example, we can pipe the stdout of the find command to the stdin of the wc command to count all the files in the current directory

// I added the -l argument to the wc command to make it count only the lines. When executed, the code above will output a count of all files in all directories under the current one.

const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});