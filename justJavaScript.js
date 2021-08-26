/**
 * https://justjavascript.com/learn/07-equality-of-values
 *
 * Coding Exercise
 * Now that you know how Object.is and === work,
 * I have a small coding exercise for you.
 * You don’t have to complete it, but it’s a fun brainteaser.
 *
 * Write a function called strictEquals(a, b)
 * that returns the same value as a === b.
 * Your implementation must not use the === or !== operators.
 *
 * Here is my answer if you want to check yourself.
 * https://gist.github.com/gaearon/08a85a33e3d08f3f2ca25fb17bd9d638
 * This function is utterly useless, but writing it helps make sense of ===.
 */

function strictEquals(a, b) {
  if (Object.is(a, b)) {
    console.log(a, b);
  }
}

strictEquals(3, 3);
