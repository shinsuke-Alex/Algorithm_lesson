//  Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges　動的計画法
//計算機科学の分野において、アルゴリズムの分類の1つである。対象となる問題を複数の部分問題に分割し、部分問題の計算結果を記録しながら解いていく手法を総称してこう呼ぶ
// https://www.youtube.com/watch?v=oBt53YbR9Kk

/*
//fib memoization O(2n)time
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n -2);
};

///　Why?
const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};

const dib = (n) => {
  if(n <= 1) return;
  dib(n <= 2);
  dib(n - 2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
*/

//高速で計算できる。O(n)time
//js object, keys will be arg to fn, value will the be return value
//メモ化再帰.計算した結果を記録しておいて、同じ数に関しては１度しか計算しないようにする方法。
//メモ（記録）して、それがあればそのまま出す。メモが無ければ計算してメモに入れておく。

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(900));