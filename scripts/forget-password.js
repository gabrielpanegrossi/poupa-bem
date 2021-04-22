const userEmailForgetPass = document.getElementById("userEmailForgetPass");

const showPassword = () => {
	const userIndex = users.findIndex(searchByEmail(userEmailForgetPass.value));
	if (userIndex > -1) {
		alert(`Sua senha é: ${users[userIndex].password}`);
	} else {
		alert(`E-mail não encontrado!`);
	}

	inputCleaner();
};
