const fs = require('fs');

const nameOfFileToRead = process.argv[2];

if(!nameOfFileToRead) {
    console.log();
    process.exit(1);
};

fs.readFile(nameOfFileToRead, 'utf8', (err, data) => {
    if(err) {
        console.log('Can not read the file');
        process.exit(1);
    };

    const lines = data.split('\n');
    const totalGames = lines.length;

    let wonGames = 0;
    let lostGames = 0;

    lines.forEach((line) => {
        if(line === 'Victory') {
            wonGames++;
        } else if(line === 'Defeat') {
            lostGames++;
        }
    });

    let percentageOfWonGames = (wonGames / totalGames) * 100;
    let percentageOfLostGames = (lostGames / totalGames) * 100;

    console.log(`You played ${totalGames} games.`);
    console.log(`You won ${wonGames} times.`);
    console.log(`You lost ${lostGames} times.`);
    console.log(`Percentage of games you won: ${percentageOfWonGames.toFixed(2)}%`);
    console.log(`Percentage of games you lost: ${percentageOfLostGames.toFixed(2)}%`);
});
