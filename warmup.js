// Specific version
function firstOrSecond(a, b) {
    return [a, b][Math.random() < 0.5 ? 0 : 1]
}

// Generic version first first or last
function firstOrLast(l) {
    const n = Math.random() < 0.5 ? 0 : 1;
    console.log(n)
    if (n == 0) return l[0];
    else return (l[l.length-1])
}

const a = firstOrSecond("foo", "bar")
const b = firstOrSecond(1, 2)
const c = firstOrSecond(["foo"], ["bar"])

l = [1, 2, 3, 4]
const d = firstOrLast(l)

console.log(a)
console.log(b)
console.log(c)
console.log(d)