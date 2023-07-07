function hasTargetSum(array, target) {
  // Pseudocode:
  // 1. Create an empty set to store seen numbers.
  // 2. Iterate through the array.
  //    - For each number, calculate the complement (target - current number).
  //    - Check if the complement exists in the set.
  //    - If it does, return true.
  //    - If it doesn't, add the current number to the set.
  // 3. If the loop completes without finding a pair, return false.

  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(array[i]);
  }

  return false;
}

/* 
  Time complexity: O(n), where n is the length of the array.
  The function iterates through the array once, performing constant-time operations for each element.

  Explanation:
  The `hasTargetSum` function uses a set to keep track of seen numbers. It iterates through the array, calculating the complement for each number and checking if the complement exists in the set. If the complement is found, it means there is a pair of numbers that sums up to the target. If the loop completes without finding a pair, it means there is no such pair in the array.
*/

// Test Suite
describe("hasTargetSum", () => {
  it("returns true when the array is [3, 8, 12, 4, 11, 7] and the target is 10", () => {
    expect(hasTargetSum([3, 8, 12, 4, 11, 7], 10)).to.be.true;
  });

  it("returns true when the array is [22, 19, 4, 6, 30] and the target is 25", () => {
    expect(hasTargetSum([22, 19, 4, 6, 30], 25)).to.be.true;
  });

  it("returns false when the array is [1, 2, 5] and the target is 4", () => {
    expect(hasTargetSum([1, 2, 5], 4)).to.be.false;
  });

  it("returns true when the array is [-7, 10, 4, 8] and the target is 3", () => {
    expect(hasTargetSum([-7, 10, 4, 8], 3)).to.be.true;
  });

  it("returns true when the array is [1, 2, 3, 4] and the target is 5", () => {
    expect(hasTargetSum([1, 2, 3, 4], 5)).to.be.true;
  });

  it("returns true when the array is [2, 2, 3, 3] and the target is 4", () => {
    expect(hasTargetSum([2, 2, 3, 3], 4)).to.be.true;
  });

  it("returns false when the array is [4] and the target is 4", () => {
    expect(hasTargetSum([4], 5)).to.be.false;
  });
});
