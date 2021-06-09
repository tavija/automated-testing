// import function from local file
const findShortestString = require("./find-shortest-string");

test("findShortestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["dog", "cat", "mouse"])).toBe("dog");
  expect(findShortestString(["Tavs", "Rachel", "Rima"])).toBe("Tavs");
});

// console.log(findShortestString(["it", "is", "a", "nice", "day"]), "a");
// console.log(findShortestString(["why", "hello", "to", "you"]), "to");
// console.log(findShortestString(["brave", "dance"]), "brave");
