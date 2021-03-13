module.exports = function check(str, bracketsConfig) {
    const b = bracketsConfig.map(per => per.join(''));
    let string = str,
        sp;

    do {
        sp = string;
        b.forEach(per => string = string.replace(per, ''));
    } while (string.length < sp.length)

    return !string.length;
}
