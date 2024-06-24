// Mock encryption and decryption functions
function mockEncrypt(text) {
    return btoa(text); // base64 encode
}

function mockDecrypt(text) {
    return atob(text); // base64 decode
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        alert('Please enter some text to encrypt.');
        return;
    }
    const encryptedText = mockEncrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        alert('Please enter some text to decrypt.');
        return;
    }
    try {
        const decryptedText = mockDecrypt(inputText);
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        alert('Invalid encrypted text.');
    }
}
