//note: assuming all names are alphabetic characters and all caps
//remember that index starts at 0 so +1 for position in list

const fs = require('fs');
const filePath = './0022_names.txt';

function solve(){
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error('Error reading the file:', err);
			return;
		}

		const names = data.split(',').map(item => item.replace(/^"|\"$/g, '')).sort();

		let sum = 0;//does not need to be bigint
		for (const name of names) {
			sum += getScoreByName(name) * (names.indexOf(name) + 1);
		}
		console.log(`SOLUTION: Total score of all names is ${sum}`);
	});
}

function getScoreByName(name) {
	let score = 0;
	for (let i = 0; i < name.length; ++i) {
		score += name.charCodeAt(i) - 64;
	}
	return score;
}

//test
console.log(`Test 'COLIN': namescore should be 53 ${getScoreByName('COLIN') === 53}`);

//solve
solve();