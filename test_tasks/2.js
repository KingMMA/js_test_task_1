function findWords(sentence) {
    const words = sentence.toLowerCase().split(" ");
    const groups = {};

    words.forEach((word) => {
        const letter = word[0];
        if (groups[letter]) {
            groups[letter].push(word);
        } else {
            groups[letter] = [word];
        }
    });

    let result = [];
    for (const letter in groups) {
        if (groups[letter].length > 1) {
            result = result.concat(groups[letter]);
        }
    }

    return result.join(', ');
}

const sentence = "Сьогодні світить сонце сині хмари спокійно пливуть кудись на захід";
console.log(findWords(sentence));
