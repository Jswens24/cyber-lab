

const myCipher = (str) => {
    const decreaseLetter = -1;
    let result = '';
    let charcode = 0;

    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + decreaseLetter;
        result += String.fromCharCode(charcode);
    }
    result = result.substring(1);
    return result;
}




console.log('hello');
console.log(myCipher('3i love cryptography!'));


// Example: 'I love cryptography!' = 'H knud bqxosnfqzogy!'