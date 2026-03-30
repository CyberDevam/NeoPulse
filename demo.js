// let s = "()[]{}";
// s = "([{{}}])";
// s = "([)]"
// let stack = s.split("");
// let ans = "";
// for(let i = 0; i < stack.length - 1; i++){
//   if(stack[i] === '{'){
//     if(stack[i + 1] !== '}') ans += stack[i];
//   }
//   else if(stack[i] === '('){
//     if(stack[i + 1] !== ')') ans += stack[i];
//   }
//   else if(stack[i] === '['){
//     if(stack[i + 1] !== ']') ans += stack[i];
//   }
// }
// console.log(ans)




// 20. Valid Parentheses
let nums = [1,1,2];
// j for replacing the character and i for iteration
let j = 1;
let n = nums[0];
for(let i = 0; i < nums.length; i++){
  if(nums[j] !== nums[i] && nums[i] > n){
    [nums[j], nums[i]] = [nums[i], nums[j]]
    n = nums[j];
    j++;
  }
}
console.log(j)