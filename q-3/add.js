const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

// Create a logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//Change the current process to the new logs directory
process.chdir(logsDir);


for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    //Write some text in the file
    fs.writeFileSync(fileName, `This is log file can be deleted with remove.js`);
    //Output the file names to console
    console.log(`Created file: ${fileName}`);
}
