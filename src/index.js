module.exports = function toReadable (number) {
    let map = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    let t = number%10;
    let h = number%100;
    if(number<=20 || number<100 && t === 0) return map[number];
    if(number<100) return map[number - t] + ' ' + map[ t];
    if(h===0) return map[number/100] + ' ' + 'hundred';
    if(h<20) return map[(number - h) / 100] + ' ' + 'hundred' + ' ' + map[h];
    return map[(number - h) / 100] + ' ' + 'hundred' + (map[h - t] === 'zero' ? '' : ' ' + map[h - t]) + (map[t] === 'zero' ? '' : ' ' + map[t]);
}
