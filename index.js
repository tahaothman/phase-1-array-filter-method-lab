// Code your solution here
function findMatching(array , string) {
    return array.filter(item => item.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(array , string) {
    return array.filter(item => item.slice(0,string.length) === string);
}

function matchName(array , string) {
    return array.filter(item => item.name === string);
}