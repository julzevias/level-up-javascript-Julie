function find123pattern(nums) {
    if (nums.length < 3) {
        return;
    }

    // nums.forEach(i => {
    //   let possiblek = [];

    //   nums.forEach(k => {
    //     if (i < k && !possiblek.includes(k)) {
    //       possiblek.push(k);
    //     }
    //   });

    //   console.log(possiblek);

    //   possiblek?.forEach(k => {
    //     let possiblej = [];

    //     nums.forEach(j => {
    //       if (i < k && k < j && !possiblej.includes(j)) {
    //         possiblej.push(j);
    //       }
    //     });
    //   });
    // });
    // console.log('possible j', possiblej);
    // return possiblej.length !== 0;


    // return possiblek?.some(k => {
    //   return nums.some(j => {
    //     return k < j;
    //   });
    // });

    // const i = Math.min.apply(null, nums);
    // const j = Math.max.apply(null, nums);

    // return nums.some(k => {
    //   return i < k && k < j;
    // });

    for (i = 0; i < nums.length - 2; i++) {
        for (j = i + 1; j < nums.length - 1; j++) {
            for (k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[k] && nums[k] < nums[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// console.log(find123pattern([3, 1, 4, 2]));
// console.log(find123pattern([1, 2, 3, 4]));
// console.log(find123pattern([1, 0, 1, -4, -3]));
// console.log(find123pattern([1,2,3,4,-4,-3,-5,-1]));
console.log(find123pattern([3,5,0,3,4]));

