//user sign up
const inputUserName = document.getElementById("userName");
const inputLastName = document.getElementById("lastName");
const inputUserEmail = document.getElementById("userEmail");
const inputUserPassword = document.getElementById("userPassword");
const inputUserPasswordConfirmartion = document.getElementById(
	"userPasswordConfirmartion"
);

// user components
const users = [];
let userId = 1;

// action
const createUser = () => {
	if (
		!inputUserName.value ||
		!inputUserEmail.value ||
		!inputUserPassword.value ||
		!inputUserPasswordConfirmartion.value
	) {
		alert("Os campos com * são obrigatórios.");
	} else if (searchUser(inputUserEmail.value)) {
		alert("Email já cadastrado.");
	} else if (inputUserPassword.value != inputUserPasswordConfirmartion.value) {
		alert("Senha e confirmação de senha não são iguais");
	} else {
		users.push({
			userId,
			name: inputUserName.value,
			email: inputUserEmail.value,
			password: inputUserPassword.value,
		});
		userId++;
		alert("Cadastro efetuado com sucesso!");
		goSignIn();
	}
	inputCleaner();
};
