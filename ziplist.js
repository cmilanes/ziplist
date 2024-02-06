const testListA = [1, 2, 3];
const testListB = ['a', 'b', 'c'];

function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}
console.log(zipList(testListA, testListB));

function zipListTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testListA, testListB));
