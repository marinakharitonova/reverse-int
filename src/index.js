module.exports = function reverse(n) {
    if (Math.sign(n) === -1) n = -n
    return n.toString().split('').reverse().join('')
}
