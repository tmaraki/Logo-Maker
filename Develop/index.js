const inquirer = require('inquirer');
const svg = require('svg-canvas');

inquirer
    .prompt({
        type:'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
    {
        type:'input',
        name:'color',
        message:'Enter a color keyword:'
    })