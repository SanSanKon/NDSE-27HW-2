const fs = require('fs');
const readline = require('readline');

const loggedFile = process.argv[2];

if(!loggedFile) {
    console.log('Please enter the name of the file to save results');
    process.exit(1);
};

const readlineTerminal = readline.createInterface(process.stdin, process.stdout);

const writeTheResult = (result) => {
    fs.appendFile(loggedFile, `${result}\n`, (err) => {
        if(err) {
            console.log('Problems with saving result.')
        }
    })
};

const dropTheCoin = () => {
    return Math.round(Math.random() * 10) < 5 ? 1 : 2;
}

readlineTerminal.setPrompt('Play the game: try to guess the number: 1 or 2. Your choice: ');
readlineTerminal.prompt();

const playTheGame = () => {
    readlineTerminal.on('line', (number) => {
        let userVariant = parseInt(number);
        let pcVariant = dropTheCoin();
        if(userVariant === pcVariant) {
            console.log('Congratulations, you won!');
            writeTheResult('Victory');
            readlineTerminal.close();
        } else if (userVariant > pcVariant || userVariant < pcVariant) {
            console.log('Unfortunately you lost. Try next time.');
            writeTheResult('Defeat');
            readlineTerminal.close();
        } else {
            console.log('Please enter the number 1 or 2.')
        }
    });
};

playTheGame();