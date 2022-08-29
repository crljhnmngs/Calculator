let display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const deletenumber = document.querySelector('#delete');

deletenumber.addEventListener('Keydown', function (event) {
    const key = event.key;
});

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.value = '';
        } else if (item.id == 'delete') {
            let toString = display.value.toString();
            display.value = toString.substr(0, toString.length - 1);
        } else if (display.value == '' && item.id == 'equals') {
            display.value = '';
        } else if (display.value != '' && item.id == 'equals') {
            display.value = eval(display.value);
        } else if (
            display.value.toString().charAt(0) == '/' ||
            display.value.toString().charAt(0) == '+' ||
            display.value.toString().charAt(0) == '-' ||
            display.value.toString().charAt(0) == '*'
        ) {
            display.value = '';
        } else {
            display.value += item.id;
        }
    };
});
