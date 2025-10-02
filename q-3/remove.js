// Import modules, create path to logs
const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

//Check for logs directory
if (fs.existsSync(logsDir)) {
    //read all files in logs directory
    fs.readdirSync(logsDir).forEach(file => {
        //build absolute path to delete each file
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${file}`);
    });

    //Remove logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
    //If no directory is found send message
} else {
    console.log('No Logs directory found.');
}