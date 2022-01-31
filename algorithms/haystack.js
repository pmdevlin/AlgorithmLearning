/*
 * Given two array-of-hashes arguments, find which (if any) elements from the second list match each
 * element from the first list.
 *
 * Elements are considered a match if EITHER the id value is the same, OR both name and context are
 * the same.
 *
 * If an element from the first list has no corresponding match in the second list, that can be
 * represented by null. Elements from the second list with no match in the first need not be present
 * in the output.
 *
 * Keys in the second "haystack" argument can be assumed (or enforced) to be unique, i.e. no two
 * values will share the same id or name + context.
 */

/*
 * Examples (references variables defined below):
 *
 * compare(findMatches([n1], haystack), [[n1, h1]]) === true     # both have id = 1
 * compare(findMatches([n2], haystack), [[n2, h3]]) === true     # h1 and h3 both have name = 'Foo', but only h3 has context = 1
 * compare(findMatches([n4], haystack), [[n4, nil]]) === true    # n4 has no matching value in haystack
 * compare(findMatches(needles, haystack), [[n1, h1], [n2, h3], [n3, h2], [n4, null]])  # multiple elements, order matches that of needles
 */
const h1 = { id: 1, name: 'Foo', context: 0 };
const h2 = { id: 2, name: 'Bar', context: 0 };
const h3 = { id: 3, name: 'Foo', context: 1 };
const h4 = { id: 4, name: 'Baz', context: 2 };
const haystack = [h1, h2, h3, h4];

const n1 = { id: 1, name: 'Baz', context: 0 };
const n2 = { name: 'Foo', context: 1 };
const n3 = { name: 'Bar', context: 0 };
const n4 = { name: 'Baz', context: 1 };
const needles = [n1, n2, n3, n4];


let findMatches = (needles, haystack) => {
    // code goes here.
    const results = [];
    needles.forEach(needleObj => {
        const resultPair = [];
        resultPair.push(needleObj);
        for (let hayStackObj of haystack) {
            if (needleObj.id === hayStackObj.id) {
                resultPair.push(hayStackObj);
            } else if (
                needleObj.name === hayStackObj.name &&
                needleObj.context === hayStackObj.context
            ) {
                resultPair.push(hayStackObj);
            }
        }
        if (!resultPair[1]) {
            resultPair.push(null);
        }
        results.push(resultPair);
    });
    return results;
};

const compare = (left, right) => {
  return JSON.stringify(left) === JSON.stringify(right);
};
const result = compare(findMatches(needles, haystack), [
    [n1, h1],
    [n2, h3],
    [n3, h2],
    [n4, null],
]);
console.log(result);

//console.log(findMatches(needles, haystack));