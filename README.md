# Misc projects in JavaScript

| Project                            | Topic(s) |
| ---------------------------------- | -------- |
| [BackpackPacker](./BackpackPacker) | Events   |
| [Grid](./Grid)                     | Events   |

---

## Useful Links

- [JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)

---

## Notes

**Just Javascript** - [Ch.7](https://justjavascript.com/learn/07-equality-of-values)<br>
[Loose equality (double equals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using_) is the bogeyman of JavaScript. Here are a couple of examples to make your skin crawl:

    console.log([[]] == ''); // true
    console.log(true == [1]); // true
    console.log(false == [0]); // true

- The rules of loose equality (also called “abstract equality”) are arcane and confusing
- Many coding standards prohibit the use of == and != in code altogether
- Widely acknowledged as an early bad design decision
- Best to discuss how much == is tolerated in your codebase as a team

<br>The one relatively common use case worth knowing is:

    if (x == null) {
       // ...
    }

This code is equivalent to writing:

    if (x === null || x === undefined) {
       // ...
    }
