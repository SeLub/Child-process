// In the Node.js function above (an express.js controller function), we read an image file using a stream. Then, we use spawn method to spawn convert program (see imagemagick.org). Then, we feed ChildProcess proc with the image stream. As long as the proc object produces data, we write that data to the resp (which is a Writable stream) and users can see the image immediately without having to wait for the whole image to convert (resized).

const spawn = require('child_process').spawn;
const fs = require('fs');
function resize(req, resp) {
    const args = [
        "-", // use stdin
        "-resize", "640x", // resize width to 640
        "-resize", "x360<", // resize height if it's smaller than 360
        "-gravity", "center", // sets the offset to the center
        "-crop", "640x360+0+0", // crop
        "-" // output to stdout
    ];

    const streamIn = fs.createReadStream('./path/to/an/image');
    const proc = spawn('convert', args);
    streamIn.pipe(proc.stdin);
    proc.stdout.pipe(resp);
}