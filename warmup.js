// Specific version
function firstOrSecond(a, b) {
    return [a, b][Math.random() < 0.5 ? 0 : 1]
}

// Generic version first first or last
function fisrtOrLast(l) {
    const n = Math.random() < 0.5 ? 0 : 1;
    if (n == 0) return l[0];
    else return (l[length])
}

const a = firstOrSecond("foo", "bar")
const b = firstOrSecond(1, 2)
const c = firstOrSecond(["foo"], ["bar"])

console.log(a)
console.log(b)
console.log(c)