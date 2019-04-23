const countWordsArray = require("count-words-array");

const blackList = [
    'i', 'it', 'app', 'the', 's', 'this', 'get', 't',
    'would', 'can', 'really', 'm', 'even', 'you', 'also',
    'much', 'and', 'way', 'many', 've', 'every', 'still', 'very',
    'so', 'that', 'to', 'see', 'could', 'if', 'there', 'a', 'now', 'is',
    'but', 'not', 'in', 'my', 'lot', 'all', 'makes', 'its', 'let', 'keep',
    'u', 'me', 'since', 'one', 'they', 'just', 'on', 'day', 'though', 'game',
    'play', 'games', 'facebook', 'note', 'notes', 'lists', 'phone', 'years',
    'list', 'location', 'level', 'levels', 'photos'
];

for (let i = 0; i <= 100; i++) {
    blackList.push(i + '');
}

const countWords = (text, minimum, length) => {
    const count = countWordsArray(text, true);
    const reduced = count.filter(item => item.count >= minimum);
    const cleaned = reduced.filter(item => !blackList.includes(item.name));
    const data = cleaned.map(item => ({ text: item.name, value: item.count }));
    return data.slice(0, length);
}

module.exports = countWords;