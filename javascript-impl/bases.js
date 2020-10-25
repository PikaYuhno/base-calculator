function* range(start, stop) {
    for (let n = start; n < stop; n++) yield n;
}
let chars = String.fromCharCode(
    ...range(65, 65 + 26),
    ...range(97, 97 + 26),
    43,
    47
);
export let map = {};
for (let i = 10; i < chars.length + 10; i++) {
    map[chars[i - 10]] = i;
    map[i] = chars[i - 10];
}
