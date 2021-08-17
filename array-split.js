const nums = [5, 8, 7, 4, 9, 41, 58, 47, 99, 65, 47];
// const part = nums.slice(4, 7);
const removed = nums.splice(4, 2, 99);
// console.log({removed});
// console.log(nums);

const together = nums.join('x');//"", " ", "some write"
console.log(together);