// html elements
const htmlBodyGlobal = document.getElementById("htmlBodyGlobal");
const subMenu = document.getElementById("sub-menu-container");
const showMyTransactions = document.getElementById("showMyTransactions");
const logOut = document.getElementById("logOut");

// let and consts
let menuStatus = true;

// html components
const header = document.getElementById("principal-header");
const footer = document.getElementById("principal-footer");
const homeMain = document.getElementById("home-main");
const aboutUsMain = document.getElementById("about-us-main");
const signInMain = document.getElementById("main-sign-in");
const signUpMain = document.getElementById("main-sign-up");
const mainForgetPassword = document.getElementById("main-forget-password");
const myTransactionsMain = document.getElementById("my-transactions-main");
const subMenuOpening = document.getElementById("subMenuOpening");
const mainPages = document.getElementById("mainPages");

const goHome = () => {
	header.className = "inherit";
	footer.className = "inherit";
	homeMain.className = "inherit";
	aboutUsMain.className = "none";
	signInMain.className = "none";
	signUpMain.className = "none";
	mainForgetPassword.className = "none";
	myTransactionsMain.className = "none";

	mainPages.innerText = "Sobre Nós";
	mainPages.onclick = goAboutUs;
};

const goAboutUs = () => {
	header.className = "inherit";
	footer.className = "inherit";
	homeMain.className = "none";
	aboutUsMain.className = "inherit";
	signInMain.className = "none";
	signUpMain.className = "none";
	mainForgetPassword.className = "none";
	myTransactionsMain.className = "none";

	mainPages.innerText = "Home";
	mainPages.onclick = goHome;
};

mainPages.onclick = goAboutUs;

const goSignIn = () => {
	header.className = "none";
	footer.className = "none";
	homeMain.className = "none";
	aboutUsMain.className = "none";
	signInMain.className = "flex";
	signUpMain.className = "none";
	mainForgetPassword.className = "none";
	myTransactionsMain.className = "none";
	inputCleaner();
};

const goSignUp = () => {
	header.className = "none";
	footer.className = "none";
	homeMain.className = "none";
	aboutUsMain.className = "none";
	signInMain.className = "none";
	signUpMain.className = "flex";
	mainForgetPassword.className = "none";
	myTransactionsMain.className = "none";
	inputCleaner();
};

const goForgetPass = () => {
	header.className = "none";
	footer.className = "none";
	homeMain.className = "none";
	aboutUsMain.className = "none";
	signInMain.className = "none";
	signUpMain.className = "none";
	mainForgetPassword.className = "flex";
	myTransactionsMain.className = "none";
	inputCleaner();
};

const goMyTransactions = () => {
	header.className = "inherit";
	footer.className = "inherit";
	homeMain.className = "none";
	aboutUsMain.className = "none";
	signInMain.className = "none";
	signUpMain.className = "none";
	mainForgetPassword.className = "none";
	myTransactionsMain.className += "inherit";
	clearInputs();
};
