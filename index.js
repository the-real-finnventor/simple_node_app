import express from 'express';
import open from 'open';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Command } from 'commander';
import promptSync from 'prompt-sync';
const prompt = promptSync()
const commander = new Command();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
commander
    .version('1.0.0')
    .usage('[OPTIONS]...')
    .option('-p, --port <value>', 'The port that web app runs on.', 8000)
    .parse(process.argv)
var app = express();
app.get('/', function (request, response) {
    console.log('GET request to `/` at IP address ' + request.ip)
    response.sendFile(__dirname + '/html_pages/index.html');
});
const port = commander.opts().port;
function action() {
    const input = prompt(':');
    if (input == 'q' || input == 'stop' || input == 'exit') {
        process.exit();
    }
    return;
}
app.listen(port, function () {
    console.log('Web app running on port '+ port +'. http://localhost:' + port + ' http://127.0.0.1:' + port + '. Press ^C to stop.');
    open('http://localhost:' + port);
});