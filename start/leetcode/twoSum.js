function twoSum(nums, target) {
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = Math.abs(target - nums[i]);
        let tempArrNoNum = [...nums].splice(i);

        console.log('nums', nums);
        console.log(tempArrNoNum);
        console.log(complement, nums.indexOf(complement));
        console.log(tempArrNoNum.includes(complement));

        if (nums[i] + complement === target && tempArrNoNum.includes(complement)) {
        indices.push(i);
       }
    }

    return (indices);
  };

  console.log(twoSum([3, 6, 7]), 10);