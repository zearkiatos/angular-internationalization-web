const fs = require('fs');

const targetPath = './src/environments/environment.ts';

const colors = require('colors');

require('dotenv').config();

const envConfigFile = `export const environment = {
    production: ${process.env['NODE_ENV'] === 'production'},
    environment: '${process.env['NODE_ENV']}'
};`;

console.log(colors.magenta('🦄The file `environment.ts` will be written with the following content: \n'));
console.log(colors.green(envConfigFile));

fs.writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`🅰️ngular environment.ts file generated correctly at ${targetPath} \n`));
    }
 });
