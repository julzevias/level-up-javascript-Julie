/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const allNumbers = [];

    const singleDigitMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const doubleDigitMap = {
        IV: 5,
        IX: 10,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    if (s.length === 0) {
        return 0;
    }

    for (let i = 0; i < s.length - 1; i++) {
        const doubleDigit = s[i] + s[i + 1];
        const foundDouble = doubleDigitMap[doubleDigit];
        // console.log(doubleDigit);
        // console.log(foundDouble);

        if (foundDouble) {
            allNumbers.push(doubleDigitMap[doubleDigit]);
            s = s.replace(doubleDigit, '');
            i--;
        } 
    }


    // console.log('all numbers', allNumbers);
    console.log('s', s);

    for (let y = 0; y < s.length; y++) {
        const foundSingle = singleDigitMap[s[y]];
        // console.log(singleDigitMap[s[y]]);
        if (foundSingle) {
            allNumbers.push(singleDigitMap[s[y]]);
        }
    }
    console.log('s', s);

    console.log(allNumbers);

    let sum = 0;
    for (k = 0; k < allNumbers.length; k++) {
        sum += allNumbers[k];
    }

    return sum;
};

console.log(romanToInt('MCMXCIV'));