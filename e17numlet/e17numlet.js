console.log();

const RFG_COLORS = ['31','33','32','36','34','35'];

const dict = {
	0: 0,
    1: "one".length,
    2: "two".length,
    3: "three".length,
    4: "four".length,
    5: "five".length,
    6: "six".length,
    7: "seven".length,
    8: "eight".length,
    9: "nine".length,
    10: "ten".length,
    11: "eleven".length,
    12: "twelve".length,
    13: "thirteen".length,
    14: "fourteen".length,
    15: "fifteen".length,
    16: "sixteen".length,
    17: "seventeen".length,
    18: "eighteen".length,
    19: "nineteen".length,
    20: "twenty".length,
    30: "thirty".length,
    40: "fourty".length,
    50: "fifty".length,
    60: "sixty".length,
    70: "seventy".length,
    80: "eighty".length,
    90: "ninety".length,
    100: "hundred".length,
    1000: "thousand".length
  };

  const namesDict = {
	0: 0,
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
  };

let count = 0;

//OPTION clean code

// for (let i = 1; i <= 1000; ++i) {
//     getWordCount(i);
// }

// function getWordCount(num){
//     if (num <= 20){
//         addAsInt(num);
//     }

//     if (num > 20 && num < 100){
//         let s = num.toString();
//         count += dict[parseInt(`${s[0]}0`)];
//         addAsInt(parseInt(s[1]));
//     }

//     if (num === 100){
//         count += dict[1] + dict[100];//one hundred
//     }

//     if (num >= 101 && num <= 999){
// 	    let s = num.toString();
// 	    count += dict[parseInt(`${s[0]}`)];
// 	    count += dict[100] + 3;

// 	    let isTeen = parseInt(`${s[1]}${s[2]}`);
// 	    if (isTeen >= 10 && isTeen <= 20){
// 		    addAsInt(isTeen);
// 	    } else {
// 		    count += dict[parseInt(`${s[1]}0`)];
// 		    addAsInt(parseInt(s[2]));
// 	    }
//     }

//     if (num === 1000){
//         count += dict[1] + dict[1000];//one thousand
//     }

//     return count;
// }

// //1-20
// function addAsInt(int){
// 	count += dict[int];
// }


//OPTION with logs

getWordCount(105);

// for (let i = 1; i <= 1000; ++i) {
//     getWordCount(i);
// }

function getWordCount(num){
    if (num <= 20){
        let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
        addAsInt(num);
    }

    if (num > 20 && num < 100){
        let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
        let s = num.toString();
        count += dict[parseInt(`${s[0]}0`)];
        let tens = parseInt(`${s[0]}0`);
        console.log(`Adding ${s[0]}0 as "${namesDict[tens]}" +${dict[tens]} to count => ${count}`);
        addAsInt(parseInt(s[1]));
    }

    if (num === 100){
        count += dict[1] + dict[100];//one hundred
        console.log(`     Logic for 100 - added "${namesDict[1]}" +${dict[1]} and "${namesDict[100]}" +${dict[100]} to count => ${count}`);
    }

    if (num >= 101 && num <= 999){
	    let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
	    let s = num.toString();
	    count += dict[parseInt(`${s[0]}`)];
	    count += dict[100] + 3;

    	let huns = parseInt(`${s[0]}`);
    	console.log(`Adding ${s[0]} for ${s[0]}00 as "${namesDict[huns]}" +${dict[huns]}, 'hundred' +${dict[100]}, 'and' +3 to count => ${count}`);

	    let isTeen = parseInt(`${s[1]}${s[2]}`);
	    if (isTeen >= 10 && isTeen <= 20){
		    addAsInt(isTeen);
	    } else {
		    let tens = parseInt(`${s[1]}0`);
		    count += dict[parseInt(`${s[1]}0`)]; //tens like "fifty"
		    console.log(`Adding ${s[1]} for ${s[1]}0 as "${namesDict[tens]}" +${dict[tens]} to count => ${count}`);
		    addAsInt(parseInt(s[2]));
	    }
    }

    if (num === 1000){
        count += dict[1] + dict[1000];//one thousand
        console.log(`     Logic for 1000 - added "${namesDict[1]}" +${dict[1]} and "${namesDict[1000]}" +${dict[1000]} to count => ${count}`);
    }

    return count;
}

//1-20
function addAsInt(int){
	count += dict[int];
	console.log(`Adding ${int} as "${namesDict[int]}" +${dict[int]} to count => ${count}`);
}

console.log();
console.log(`~*~*~*~ Congratulations you made it to the end and ans is ${count} ~*~*~*~`);

function rainbowifyString(str){
    let [fgs, ic] = ['', 0];
    
    for (let i = 0; i < str.length; ++i)
    {
        if (str[i] === ' '){
            fgs += ' ';
        } else {
            fgs += `\u001b[${RFG_COLORS[ic]}m${str[i]}`;
            ic++;
        }
    
        if (ic === RFG_COLORS.length) ic = 0;
    }
    
    return `\u001b[0m${fgs}\u001b[0m`;
}