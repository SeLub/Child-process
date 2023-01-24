const exec = require('child_process').exec;
exec('netstat -aon | find "9000"', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    console.log('stderr ', stderr);
});

// In above example, Node will spawn a subshell and execute the command “netstat -aon | find “9000”” in that subshell. The command string includes two commands:

// netstat -aon: netstat command with argument -aon
// find “9000”: find command with argument 9000
// The first command will display all active TCP connections(-a), process id (-o), ports, and addresses (expressed numerically -n) on which the computer is listening. The output of this command will feed into the second command which finds the process with port id 9000. On success, the following line will print out:

// 1 TCP    0.0.0.0:9000           0.0.0.0:0              LISTENING       11180