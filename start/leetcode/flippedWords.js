function reverseWords(s) {
    arr = s.split(' ');
    console.log(arr);

    for (i = 0; i < arr.length; i++) {
        let flippedWord = '';
        for (j = arr[i].length - 1; j >= 0; j--) {
          console.log(arr[i].charAt(j));
            flippedWord = flippedWord + arr[i].charAt(j);
        }
        arr[i] = flippedWord;
    }
    return arr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));