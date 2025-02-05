const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.input button');

const inp = document.querySelector('.inp');
const out = document.querySelector('.out');

let currentInput = '';
let currentOutput = '';

function updateScreen() {
    inp.textContent = currentInput; // Show current input
    out.textContent = currentOutput; // Show output (to be updated with eval later)
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        if (buttonText === 'AC') {
            currentInput = '';
            currentOutput = '';
        } else if (buttonText === '=') {
            try {
                currentOutput = eval(currentInput).toString();
                // currentOutput = currentInput;
            } catch (error) {
                currentInput = 'Error';
                currentOutput = 'Error';
            }
        } else {
            currentInput += buttonText;
            currentOutput = '';
        }
        
        updateScreen();
    });
});
