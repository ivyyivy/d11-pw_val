function val() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var textLength = document.getElementById("password").value.length;

    document.getElementById("alertPart").classList.toggle("invisible")

    if (document.getElementById("password").value.match(lowerCaseLetters)) {
        document.getElementById('lcl').classList.remove("invalid");
        document.getElementById('lcl').classList.add("valid");
        document.getElementById('lcl').style.color = 'green';
        document.getElementById('lcl').textContent = "Your password has one lower-case letter.";
    }
    else {
        document.getElementById('lcl').classList.remove("valid");
        document.getElementById('lcl').classList.add("invalid");
        document.getElementById('lcl').style.color = 'red';
    }

    if (document.getElementById("password").value.match(upperCaseLetters)) {
        document.getElementById('upl').classList.remove("invalid");
        document.getElementById('upl').classList.add("valid");
        document.getElementById('upl').style.color = 'green';
        document.getElementById('upl').textContent = "Your password has one upper-case letter.";
    }
    else {
        document.getElementById('upl').classList.remove("valid");
        document.getElementById('upl').classList.add("invalid");
        document.getElementById('upl').style.color = 'red';
    }


    if (document.getElementById("password").value.match(numbers)) {
        document.getElementById('number').classList.remove("invalid");
        document.getElementById('number').classList.add("valid");
        document.getElementById('number').style.color = 'green';
        document.getElementById('number').textContent = "Your password has one number.";
    }
    else {
        document.getElementById('number').classList.remove("valid");
        document.getElementById('number').classList.add("invalid");
        document.getElementById('number').style.color = 'red';
    }

    if (textLength >= 7) {
        document.getElementById('textl').classList.remove("invalid");
        document.getElementById('textl').classList.add("valid");
        document.getElementById('textl').style.color = 'green';
        document.getElementById('textl').textContent = "Your password has 8 letters.";
    }
    else {
        document.getElementById('textl').classList.remove("valid");
        document.getElementById('textl').classList.add("invalid");
        document.getElementById('textl').style.color = 'red';

    }
}






//         pw.value.match(upperCaseLetters) &&
//         pw.value.match(numbers) &&
//         pw.value.length >= 8) {
//         a.classList.remove("invalid");
//         a.classList.add("valid");
//         a.textContent = "That's a valid password."
//     }
//     else
//         a.classList.remove('valid')
//     a.classList.add('invalid');
//     a.content = "Your password has to be at least 8 letters, one uppercase letter, one lowercase letter, and a number."
// }

// function colorChange() {
//     document.getElementById('signIn').style.color = 'red';
// }



// function hide() {
//     var x = document.getElementById("alert");
//     x.style.display = "none"
// }

// function show() {
//     var x = document.getElementById("alert");
//     x.textContent = "Your password has to be at least 8 letters, one uppercase letter, one lowercase letter, and a number."
//     x.style.display = "block"
// }