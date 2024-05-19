"use strict";

/*
// function declaration
function ageCalc(birthday) {
	const currentDate = new Date().getFullYear();
	return currentDate - birthday;
}
console.log(`I'm ${ageCalc(1996)} years old`);

// function expression
const ageCalculator = function (birthday) {
	return new Date().getFullYear() - birthday;
};
console.log(`I'm ${ageCalculator(1997)} years old`);

// Arrow function
const ageCalculatorArr = (birthday, currentYear) => currentYear - birthday;
console.log(`I'm ${ageCalculatorArr(1996, 2022)} years old`);


function calcAverage(arr) {
	return arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length;
}

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins === avgKoalas) console.log("There is a Draw!!!");
	else if (avgDolphins >= avgKoalas * 2)
		console.log(`Dolphins Wins!!! ${avgDolphins} vs. ${avgKoalas}`);
	else if (avgKoalas >= avgDolphins * 2)
		console.log(`Koalas Wins!!! ${avgKoalas} vs. ${avgDolphins}`);
	else console.log(`No team win!!!`);
};

let data1 = {
	dolphins: [44, 23, 71],
	koalas: [65, 54, 49],
};

let data2 = {
	dolphins: [85, 54, 41],
	koalas: [23, 34, 27],
};

checkWinner(calcAverage(data1["dolphins"]), calcAverage(data1["koalas"]));
checkWinner(calcAverage(data2["dolphins"]), calcAverage(data2["koalas"]));


// function calcTip(bill) {
// 	return bill >= 50 && bill <= 300
// 		? bill * 0.15
// 		: bill < 50
// 		? bill * 0.1
// 		: bill * 0.2;
// }




const mark = {
	firstName: "Mark",
	lastName: "Miller",
	mass: 78,
	tall: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.tall ** 2;
		return this.bmi;
	},
};

const john = {
	firstName: "John",
	lastName: "Smith",
	mass: 92,
	tall: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.tall ** 2;
		return this.bmi;
	},
};

if (mark.bmi > john.bmi)
	console.log(
		`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
			mark.firstName
		}'s (${mark.calcBMI()})`
	);
else
	console.log(
		`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${
			john.firstName
		}'s (${john.calcBMI()})`
	);
*/

const calcTip = (bill) =>
	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

bills.forEach((e) => {
	totals.push(e + calcTip(e));
	tips.push(calcTip(e));
	//
});

function calcAverage(arr) {
	return arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length;
}
console.log(bills, tips, totals);
// console.log(`Total: ${total}`);
// console.log(`Tips: ${tips}`);
console.log(`Average of totals: ${calcAverage(totals)}`);
