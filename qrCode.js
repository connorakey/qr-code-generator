
// This file is incharge of communicating the front end and backend together

const url = require(./configuration.json).url


const qrLinkBox = document.getElementById('qrCodeInput');
const qrLinkSize = document.getElementById('qrCodeSize');

const output = document.getElementById('output');
const output2 = document.getElementById('output2');

qrLinkBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const inputValue = qrLinkBox.value;
        if (inputValue.trim() !== "") {
            output.textContent = `You entered: ${inputValue}`;
            window.location.href = "http://" + url + "/generate?link=" + encodeURIComponent(inputValue);
        } else {
            output.textContent = 'Please enter a link in this box to proceed.';
        }
    }
});



qrLinkSize.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const inputValue = qrLinkBox.value;
        const sizeValue = qrLinkSize.value;

        if (inputValue.trim() !== "" && sizeValue.trim() !== "") {
            window.location.href = "http://" + url + "/generate?link=" + encodeURIComponent(inputValue) + "&size=" + encodeURIComponent(sizeValue);
        } else {
            output2.textContent = 'Please enter both a link and a size, if you do not want to enter a size, please press the enter key on the top box.';
        }
    }
});
