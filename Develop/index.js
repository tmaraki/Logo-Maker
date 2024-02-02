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
        name:'text-color',
        message:'Enter a color for the text:'
    }, {
        type:'checkbox',
        name: 'shape',
        message: [circle, triangle, square],
    },
    {
        type:'input',
        name: 'shape-color',
        message: 'Enter a color for the shape:',
    })