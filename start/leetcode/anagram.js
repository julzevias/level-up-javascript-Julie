function isAnagram(s, t) {
   const sArr = [...s];
    const tArr = [...t];

    if (s.length !== t.length) {
        return false;
    }

    sArr.forEach(letter => {
      if (tArr.includes(letter)) {
        const index = tArr.indexOf(letter)
        tArr.splice(index, 1);
      } 
    });

    return tArr.length === 0;

}

console.log(isAnagram('anagram', 'nagaram'));