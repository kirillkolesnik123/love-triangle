/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    let count = 0;
    for (let i = 0, lenght = preferences.length; i < lenght; i++) {
        const cond1 = preferences[preferences[preferences[i] - 1] - 1] === i + 1;
        const cond2 = i + 1 !== preferences[i];
        if (cond1 && cond2) {
            count++;
        }
    }
    return count / 3;
};
