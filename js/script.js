window.addEventListener('DOMContentLoaded', function () {

    const info = document.querySelector(".info"),
        copy = document.querySelector(".copy"),
        generate = document.querySelector(".generate"),
        passfield = document.querySelector("#password"),
        lowercaseCheckbox = document.getElementById("lowercase"),
        uppercaseCheckbox = document.getElementById("uppercase"),
        symbolsCheckbox = document.getElementById("symbols"),
        numbersCheckbox = document.getElementById("numbers"),
        userSymbols = document.getElementById("user-symbols");

    let password = "",
        passwordLength = 4,
        lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz",
        uppercaseCharacter = "",
        number = "",
        symbol = "";


    function calcChars() {
        if (lowercaseCheckbox.checked) {
            lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
        } else {
            lowercaseCharacter = "";
        }

        if (uppercaseCheckbox.checked) {
            uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        } else {
            uppercaseCharacter = "";
        }

        if (numbersCheckbox.checked) {
            number = "0123456789";
        } else {
            number = "";
        }

        if (symbolsCheckbox.checked) {
            symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        } else if (userSymbols.value && !symbolsCheckbox.checked) {
            symbol = userSymbols.value;
        } else {
            symbol = "";
        }

    }

    function generatePassword() {
        password = "";

        calcChars();

        let chars = lowercaseCharacter + uppercaseCharacter + number + symbol,
            n = chars.length;

        passwordLength = document.getElementById("length").value;

        for (let i = 0; i < passwordLength; i++) {
            password += chars.charAt(Math.floor(Math.random() * n));
        }

        passfield.value = password;
    }

    function copyText() {
        navigator.clipboard.writeText(password);
        info.classList.toggle('hide');


        setTimeout(function () {
            info.classList.toggle('hide');
        }, 1500);
    }


    generate.addEventListener('click', generatePassword);

    copy.addEventListener('click', copyText);

});