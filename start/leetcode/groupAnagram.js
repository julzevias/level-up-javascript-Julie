function groupAnagram(strs) {
    let anagrams = [];

     for (i = 0; i < strs.length; i++) {
        strs[i] = [...strs[i]];
    }

    for (i = 0; i < strs.length; i++) {
        if (anagrams.length === 0) {
            anagrams.push(strs[i]);
            break;
        } else {
            for (j = 0; j < anagrams.length; j++) {
                for (k = 0; k < strs[j].length; k++) {
                    if (anagrams[j].length !== str[i].length) {
                        anagrams.push[strs[i]];
                        break;
                    } else if (!strs[i].includes(anagrams[j][k])) {
                        anagrams.push[strs[i]];
                        break;
                    } else {
                        anagrams[j].push(strs[i]);
                    }
                }
            }
        }
    }

    return anagrams;
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));