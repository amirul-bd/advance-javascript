const nums = [1, 2, 3, 4, -5, -7, 8, 9, 10, -11, 12, 13, 14, 15];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 5) {
        break;
    }
    console.log(element);
}
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element < 0) {
        continue;
    }
    console.log(element);
}