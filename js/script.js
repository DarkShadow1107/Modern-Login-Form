let login = document.querySelector(".login");
let create = document.querySelector(".create");
let container = document.querySelector(".container");
let forgot = false;
localStorage.setItem("forgotValue", forgot.toString());
            
function Mail(string) {
	let number = 0;
	let length = string.length;
	for (let i = 0; i < length && number < 2; i++) if (string[i] === "@") number++;
	if (number === 1) return true;
	return false;
}
function containsSpecialChars_password(string) {
	const specialChars = /[`!@#$%^&*()_+\- =\[\]{};':"\\|,.<>\/?~]/;
	return specialChars.test(string);
}
function containsSpecialChars_email(string) {
	const specialChars = /[`!#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/;
	return specialChars.test(string);
}
function Submit() {
	let Nickname = document.getElementById("signname").value;
	let E_mail = document.getElementById("signemail").value;
    let Password = document.getElementById("signpass").value;
    let Password_Confirmed = document.getElementById("signpassconfirmed").value;
	if (containsSpecialChars_email(E_mail) === false)
		if (
			(E_mail.slice(-10) === "@gmail.com" || E_mail.slice(-12) === "@outlook.com" || E_mail.slice(-10) === "@yahoo.com") &&
			Nickname !== "" &&
			Mail(E_mail)
        )
            if (Password === Password_Confirmed)
                if (Password !== "")
                    if (Password.length < 10) alert("Your password is too short, it must contains at least 10 characters!");
                    else if (containsSpecialChars_password(Password) === false)
                        alert("Your password is weak, it must contains special characters as well!");
                    else {
                        localStorage.setItem("passValue", Password.toString());
                        localStorage.setItem("nameValue", Nickname.toString());
                        localStorage.setItem("mailValue", E_mail.toString());
                        forgot = false;
                        localStorage.setItem("forgotValue", forgot.toString());
                        alert("Welcome " + Nickname + ", your e-mail address was registered with the following address " + E_mail);
                        //window.location.href = './index.html';
                    }
                else alert("Please insert a strong password!");
            else alert("Sorry, you need to insert the same password twice.");
		else alert("Invalid e-mail address or empty username, please insert a valid e-mail address and an username!");
	else {
		alert("Your e-mail address must not contains special characters!");
		alert("BUT some special charcters are allowed, like the following characters: @_.");
	}
}
function Submit_Log() {
	let Username = document.getElementById("logname").value;
	let Password = document.getElementById("logpass").value;
	let passValue = localStorage.getItem("passValue");
	let mailValue = localStorage.getItem("mailValue");
	let nameValue = localStorage.getItem("nameValue");
	let forgotValue = localStorage.getItem("forgotValue");
	if (forgotValue === "false")
		if (nameValue != Username || passValue != Password) {
			alert("Your username or password is incorrect!");
		}
		else {
			alert("Welcome back " + nameValue + ", here at the Filspresso!");
			//window.location.href = './index.html';
		}
	else if (Password !== "")
			if (Password.length < 10) alert("Your password is too short, it must contains at least 10 characters!");
			else if (containsSpecialChars_password(Password) === false)
				alert("Your password is weak, it must contains special characters as well!");
			else {
				localStorage.setItem("passValue", Password.toString());
				alert("Your password has been changed!");
				alert("Welcome back " + nameValue + ", here at the Filspresso!");
				localStorage.setItem("forgotValue", "false");
				//window.location.href = './index.html';
			}
}
function Forgot() {
	let Username = document.getElementById("logname").value;
	let Password = document.getElementById("logpass").value;
	localStorage.setItem("forgotValue", "true");
	alert("We're sorry that you forgot yor password, you'll enter your username and the new password in the Log In form.");
	Submit_Log();
}

login.onclick = function () {
    container.classList.add("signinForm");
};

create.onclick = function () {
    container.classList.remove("signinForm");
};

document.querySelector(".create_account").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    Submit();
});

document.querySelector(".log_in_account").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    Submit_Log();
});