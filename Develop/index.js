const fs = require('fs');
const inquirer = require('inquirer');
console.log("Create your logo generator");

const questions = [
        {
            type:'input',
            name: 'text',
            message: 'Enter up to 3 characters:',
            validate: (input) => input.length > 0 && input.length <= 3,
        },
        {
            type:'input',
            name:'textColor',
            message:'Enter a color for the text (keyword or hexadecimal):'
        }, 
        {
            type:'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type:'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hexadecimal):',
        }];

        // return userInput;
    
    console.log(generateSvg);

    //svg logic based on user input
    function generateLogo(fileName, userInput) {
        fs.writeFileSync(fileName, userInput, (err) =>{
            if(err) {
                console.log(err);
            } else {
                console.log('Successfully generated logo.svg!');
            }
        });
    };

function init() {
    inquirer.prompt(userInput)
    .then(function(userInput) {
        console.log(userInput)
        generateLogo("logo.svg", generateSvg(userInput));
    });
};

init();


    // run application
//     try {
//             const userInput = await promptUser();
//             generateLogo(userInput);
//         } catch (error) {
//         console.error('Error:', error.message);
//         }
// };