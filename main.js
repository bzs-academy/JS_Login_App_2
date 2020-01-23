
var username, password;

// ------------------------------------------- LOGIN PART -----------------------------------------------
// to show the login modal
function showModal() {
    document.getElementById('modalId').style.display = 'block';
}

// to hide the login modal
function hideModal(x) {
    document.getElementById('modalId' + x).style.display = 'none';
}

// to get the values of inputs'
function getValueLogin (event) {
    console.log(event);

    if (event.name === 'username') {
        username = event.value.toLowerCase();

    } else if ( event.name === 'password') {
        password = event.value.toLowerCase();
    }
}

// to submit the form from login
function submitFormLogin () {

    if ( username === 'admin' && password === 'admin') {

        console.log(document.location);
        
        document.location.href = "homePage.html";
    } else {
        alert('Yanlis username veya sifre girdiniz..!');
        document.location.reload(true);
    }
}


// ------------------------------------------- SIGN UP PART -----------------------------------------------

var usernameSignUp, passwordSignUp, passwordRepeatSignUp;


function signUpInLogin() {
    document.getElementById('modalId').style.display = 'none';
    document.getElementById('modalId2').style.display = 'block';
}

// to get the values of inputs' in Sigh Up part
function getValueSignUp (event) {

    if (event.name === 'username') {
        usernameSignUp = event.value.toLowerCase();

    } else if (event.name === 'password') {
        passwordSignUp = event.value.toLowerCase();

    } else {
        passwordRepeatSignUp = event.value.toLowerCase();
    } 
}

// to submit the form in Sign Up
function signUp () {

    console.log( usernameSignUp, passwordSignUp, passwordRepeatSignUp );

    if ( passwordSignUp !== passwordRepeatSignUp ) {

        alert("HATA - Password'ler birbiri ile uyumlu degil...!");
        return;

    } else {
        document.location.reload(true);
        alert("Basarili bir sekilde hesap olusturulmustur ...");
    }
}




// when the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    this.console.log(event);

    var modal = document.getElementById('modalId');
    var modal2 = document.getElementById('modalId2');

    if (event.target == modal) {
        modal.style.display = 'none';

    } else if (event.target == modal2) {
        modal2.style.display = 'none'
    }
}