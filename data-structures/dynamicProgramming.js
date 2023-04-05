// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(10))

// using memoization
// const fib = (n, memo = []) => { 
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   let res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   console.log(memo);
//   return res;
// }

// console.log(fib(6));

const fib = (n) => {
  if (n <= 2) return 1;
  let fibNum = [0, 1, 1];
  for (let i = 3; i <= n; i++){
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }
  return fibNum[n];
}

// console.log(fib(6));