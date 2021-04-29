// user login
const inputUserEmailLogIn = document.getElementById("userEmailLogIn");
const inputUserPasswordLogIn = document.getElementById("userPasswordLogIn");
const btnOptions = document.getElementById("btnOptions");

// change user status
const userStatus = document.getElementById("userStatus");
const userLogged = [{ status: false, userId: 0 }];

// actions
btnOptions.onclick = goSignIn;

const login = () => {
	if (!inputUserEmailLogIn.value || !inputUserPasswordLogIn.value) {
		alert("Por favor preencha todos os campos!");
	} else if (
		searchUser(inputUserEmailLogIn.value, inputUserPasswordLogIn.value)
	) {
		alert("Logado com sucesso.");
		inserText(
			userStatus,
			users[users.findIndex(searchByEmail(inputUserEmailLogIn.value))].name
		);
		goHome();
		alterUserLogged(inputUserEmailLogIn.value);
		clearTransactionStatus();
		refreshList();
		btnOptions.onclick = "";
		subMenuOpening.className = "inherit";
		console.log("teste");
	} else {
		alert("Email e/ou senha incorretos!");
	}
	inputCleaner();
};

const alterUserLogged = (email) => {
	const user = users.filter(searchByEmail(email));
	userLogged[0] = {
		status: true,
		userId: user[0].userId,
	};
};
