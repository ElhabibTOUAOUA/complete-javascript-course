/*
const gravity = 9.80665;

let data1 = {
	mark: {
		weigh: 78,
		tall: 1.69,
	},
	john: {
		weigh: 92,
		tall: 1.95,
	},
};

let data2 = {
	mark: {
		weigh: 95,
		tall: 1.88,
	},
	john: {
		weigh: 85,
		tall: 1.76,
	},
};

let mass = {
	data1: {
		mark: data1["mark"]["weigh"] / gravity,
		john: data1["john"]["weigh"] / gravity,
	},
	data2: {
		mark: data2["mark"]["weigh"] / gravity,
		john: data2["john"]["weigh"] / gravity,
	},
};

let BMI = {
	data1: {
		mark: mass["data1"]["mark"] / data1["mark"]["tall"] ** 2,
		john: mass["data1"]["john"] / data1["john"]["tall"] ** 2,
	},
	data2: {
		mark: mass["data2"]["mark"] / data2["mark"]["tall"] ** 2,
		john: mass["data2"]["john"] / data2["john"]["tall"] ** 2,
	},
};

let markHigherBMI = BMI["data1"]["mark"] > BMI["data1"]["john"];
let markHigherBMI2 = BMI["data2"]["mark"] > BMI["data2"]["john"];

console.log("Mark BMI: ", BMI["data1"]["mark"]);
console.log("John BMI: ", BMI["data1"]["john"]);

console.log(typeof BMI["data1"]["mark"]);
console.log(markHigherBMI);
console.log(markHigherBMI2);
console.log(`Multi line
string 
is here`);

function Avr(arr) {
	return arr.reduce((partialSum, a) => partialSum + a, 0) / arr.length;
}

let data1 = {
	dolphins: [96, 108, 89],
	koalas: [88, 91, 110],
};

let data2 = {
	dolphins: [97, 112, 101],
	koalas: [109, 95, 123],
};

let data3 = {
	dolphins: [97, 112, 101],
	koalas: [109, 95, 106],
};

const dolphinsAvr = Avr(data2["dolphins"]);
const koalasAvr = Avr(data2["koalas"]);


// normal test of win
if (dolphinsAvr === koalasAvr) console.log("There is a Draw!!!");
else if (dolphinsAvr > koalasAvr) console.log("Dolphins Wins!!!");
else console.log("Koalas Wins!!!");


// bonus1 test of win
if (dolphinsAvr === koalasAvr) console.log("There is a Draw!!!");
else if (dolphinsAvr > koalasAvr && dolphinsAvr >= 100)
	console.log("Dolphins Wins!!!");
else if (koalasAvr > dolphinsAvr && koalasAvr >= 100)
	console.log("Koalas Wins!!!");
else console.log("There is no winner !!!");


// bonus2 test of win
if (dolphinsAvr === koalasAvr && dolphinsAvr >= 100) {
	console.log(`Dolphins: ${dolphinsAvr} | Koalas: ${koalasAvr}`);
	console.log("There is a Draw!!!");
} else if (dolphinsAvr > koalasAvr && dolphinsAvr >= 100) {
	console.log(`Dolphins: ${dolphinsAvr} | Koalas: ${koalasAvr}`);
	console.log("Dolphins Wins!!!");
} else if (koalasAvr > dolphinsAvr && koalasAvr >= 100) {
	console.log(`Dolphins: ${dolphinsAvr} | Koalas: ${koalasAvr}`);
	console.log("Koalas Wins!!!");
} else console.log("There is no winner !!!");


const days = [
	"Saturday",
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
];

let day = days[6];

switch (day) {
	case "Monday":
		console.log("Plan course structure");
		console.log("Go to coding meetup");
		break;
	case "Friday":
		console.log("A rest day!!!🎞");
		break;
	default:
		console.log("Not a valid day");
}
*/

const bill = 430;
const tip =
	bill >= 50 && bill <= 300
		? bill * 0.15
		: bill < 50
		? bill * 0.1
		: bill * 0.2;

console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value was ${
		bill + tip
	}`
);
