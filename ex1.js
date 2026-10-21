let a = 'abcde';
let b = 'mimi';
function ex1(a, b) {
    a = a + b;
    b = a.slice(0, a.length - b.length)
    console.log('b: ',b)
    a = a.slice(b.length)
    console.log('a: ',a)
}
ex1(a, b)
