// Math

const sum = (n1, n2) => n1 + n2;
const subtraction = (n1, n2) => n1 - n2;
const multiplication = (n1, n2) => n1 * n2;
const division = (n1, n2) => n1 / n2;

const calc = (typeOfCalc, n1, n2) => typeOfCalc(n1, n2);

const avarage = (n1, n2) => calc(division, calc(sum, n1, n2), 2);

// High Order Functions
const inserText = (htmlElement, value) => (htmlElement.innerText = value);
const inserHtml = (htmlElement, value) => (htmlElement.innerHtml = value);
const searchByEmail = (email) => (user) => user.email === email;

// Common functions
const inputCleaner = () => {
	inputUserEmailLogIn.value = "";
	inputUserPasswordLogIn.value = "";
	inputUserName.value = "";
	inputLastName.value = "";
	inputUserEmail.value = "";
	inputUserPassword.value = "";
	inputUserPasswordConfirmartion.value = "";
	userEmailForgetPass.value = "";
};

const searchUser = (email, password) => {
	if (!password) {
		for (user of users) {
			if (user.email === email) {
				return true;
			}
		}
	} else {
		for (user of users) {
			if (user.email === email && user.password === password) {
				return true;
			}
		}
	}
};
