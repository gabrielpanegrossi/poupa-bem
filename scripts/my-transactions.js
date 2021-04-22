// HTML CONSTANTS
// search bar consts
const selectTypeOfSearch = document.getElementById("selectTypeOfSearch");
const inputSearch = document.getElementById("inputSearch");

// form consts
const inputDescription = document.getElementById("inputDescription");
const selectType = document.getElementById("selectType");
const inputPrice = document.getElementById("inputPrice");
const selectCategory = document.getElementById("selectCategory");

const btnSave = document.getElementById("btnSave");

// insert status values consts
const onScreenBalance = document.getElementById("onScreenBalance");
const onScreenTotalIncome = document.getElementById("onScreenTotalIncome");
const onScreenIncomeAvarage = document.getElementById("onScreenIncomeAvarage");
const onScreenTotalSpent = document.getElementById("onScreenTotalSpent");
const onScreenSpentAvarage = document.getElementById("onScreenSpentAvarage");

// show transactions on screen consts and lets
const showTransactions = document.getElementById("showTransactions");
let containerShowTransactionsCreated = 0;

// javascript functions, consts and lets

const transactions = [];
let nextID = 1;
let totalIncome = 0;
let howManyIncomes = 0;
let totalSpent = 0;
let howManySpents = 0;

// high order functions
const searchById = (id) => (transaction) => transaction.id === id;
const searchByDescription = (description) => (transaction) =>
	transaction.description.toUpperCase().search(description.toUpperCase()) > -1;
const searchByType = (type) => (transaction) =>
	translateSelectValue(transaction.type)
		.toUpperCase()
		.search(type.toUpperCase()) > -1;
const searchByCategory = (category) => (transaction) =>
	translateSelectValue(transaction.category)
		.toUpperCase()
		.search(category.toUpperCase()) > -1;

const translateSelectValue = (selectValue) => {
	switch (selectValue) {
		case 5:
			return "Receita";
		case 6:
			return "Despesa";
		case 7:
			return "Lazer";
		case 8:
			return "Trabalho";
		case 9:
			return "Entretenimento";
		case 10:
			return "Contas Pagas";
		case 11:
			return "Investimentos";
	}
};

const refreshList = (filteredList) => {
	let transactionsList = "";
	totalIncome = 0;
	howManyIncomes = 0;
	totalSpent = 0;
	howManySpents = 0;
	let containerShowTransactionsCreated = 0;

	const list =
		filteredList === undefined || filteredList > -1
			? transactions
			: filteredList;

	const listaUsers = list.reduce((acc, user) => {
		if (user.userId === userLogged[0].userId) {
			acc.push(user);
		}
		return acc;
	}, []);

	console.log(listaUsers);

	listaUsers.forEach((transaction) => {
		transactionsList += `
        <div class="container-transaction ${
					transaction.type === 5 ? "income" : "spent"
				}">
            	<div>
					<div>
						<p>Descrição:</p>
						<p>${transaction.description}</p>
					</div>

					<div>
						<p>Tipo:</p>
						<p class="${
							transaction.type === 5
								? "positive-underline"
								: "negative-underline"
						}">${translateSelectValue(transaction.type)}</p>
					</div>

					<div>
						<p>Categoria:</p>
						<p>${translateSelectValue(transaction.category)}</p>
					</div>

					<div>
						<p>Valor:</p>
						<p>${transaction.price}</p>
					</div>

					<div class="fav-icons">
						<div>
							<i class="fas fa-trash-alt negative" onclick="removeTransaction(${
								transaction.id
							}
							)"></i>
						</div>
						<div>
							<i class="fas fa-pen positive" onclick="editTransaction(${transaction.id}
							)"></i>
						</div>
					</div>
				</div>
        </div>
        `;

		if (transaction.type == 5) {
			howManyIncomes++;
			totalIncome += transaction.price;
		} else {
			howManySpents++;
			totalSpent += transaction.price;
		}

		onScreenBalance.innerText = (totalIncome - totalSpent).toFixed(2);
		onScreenTotalIncome.innerText = totalIncome.toFixed(2);
		onScreenIncomeAvarage.innerText = (totalIncome / howManyIncomes > 0
			? totalIncome / howManyIncomes
			: 0
		).toFixed(2);
		onScreenTotalSpent.innerText = totalSpent.toFixed(2);
		onScreenSpentAvarage.innerText = (totalSpent / howManySpents > 0
			? totalSpent / howManySpents
			: 0
		).toFixed(2);
	});

	if (containerShowTransactionsCreated === 0) {
		showTransactions.innerHTML = `<div id="containerShowTransactions"> </div>`;
		const containerShowTransactions = document.getElementById(
			"containerShowTransactions"
		);
		containerShowTransactions.innerHTML = transactionsList;
		containerShowTransactionsCreated++;
	}
};

const clearTransactionStatus = () => {
	onScreenBalance.innerText = 0;
	onScreenTotalIncome.innerText = 0;
	onScreenIncomeAvarage.innerText = 0;
	onScreenTotalSpent.innerText = 0;
	onScreenSpentAvarage.innerText = 0;
};

const clearInputs = () => {
	inputDescription.value = "";
	selectType.value = 5;
	inputPrice.value = "";
	selectCategory.value = 7;
};

const addTransaction = () => {
	const price = parseFloat(inputPrice.value ? inputPrice.value : 0);
	const type = parseFloat(selectType.value);
	const category = parseFloat(selectCategory.value);

	transactions.push({
		userId: userLogged[0].userId,
		id: nextID,
		description: inputDescription.value,
		type,
		price,
		category,
	});

	nextID++;

	refreshList();
	clearInputs();
};

btnSave.onclick = addTransaction;

const removeTransaction = (transactionId) => {
	const index = transactions.findIndex(searchById(transactionId));

	transactions.splice(index, 1);
	refreshList();
};

const confirmEdition = (transactionId) => {
	const index = transactions.findIndex(searchById(transactionId));

	const price = parseFloat(inputPrice.value ? inputPrice.value : 0);
	const type = parseFloat(selectType.value);
	const category = parseFloat(selectCategory.value);

	transactions[index] = {
		userId: userLogged[0].userId,
		id: transactionId,
		description: inputDescription.value,
		type,
		price,
		category,
	};

	btnSave.onclick = addTransaction;
	refreshList();
	clearInputs();
};

const editTransaction = (transactionId) => {
	const transaction = transactions.find(searchById(transactionId));

	inputDescription.value = transaction.description;
	inputPrice.value = transaction.price;
	selectType.value = transaction.type;
	selectCategory.value = transaction.category;

	btnSave.onclick = () => confirmEdition(transactionId);
};

inputSearch.addEventListener("keyup", (event) => {
	const value = event.target.value;
	const typeOfSearch = parseInt(selectTypeOfSearch.value);

	const filteredList =
		typeOfSearch === 1
			? transactions.filter(searchById(parseInt(value)))
			: typeOfSearch === 2
			? transactions.filter(searchByDescription(value))
			: typeOfSearch === 3
			? transactions.filter(searchByType(value))
			: transactions.filter(searchByCategory(value));

	refreshList(filteredList);
});
