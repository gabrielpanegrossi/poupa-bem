// actions you can perfom after you're logged in

window.onclick = (event) => {
	if (userLogged[0].status === true) {
		if (
			event.target.matches("#userStatus") ||
			event.target.matches("#subMenuOpening") ||
			event.target.matches("#btnOptions") ||
			event.target.matches(".showsubmenu")
		) {
			subMenu.className = "inherit";
		} else {
			subMenu.className = "none";
		}
	}
};

showMyTransactions.onclick = () => goMyTransactions();
