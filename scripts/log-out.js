const logOutUser = () => {
	inserText(userStatus, "Login");
	goHome();
	userLogged[0].status = false;
	userLogged[0].userId = 0;
	btnOptions.onclick = goSignIn;
	subMenuOpening.className = "none";
	subMenu.className = "none";
};

logOut.onclick = logOutUser;
