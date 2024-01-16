function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    if (seenNumbers.has(target - number)) {
      return true;
    }
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the array.
  This is because the function iterates through the array once, and set operations (addition and checking) are O(1).
*/

/* 
  Add your pseudocode here
  Create a set to store numbers we've seen.
  Iterate through each number in the array:
    Check if the set contains the complement (target - current number).
    If it does, return true.
    Add the current number to the set.
  If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
  This function checks if any two numbers in the array add up to the target sum. It uses a set to keep track of the numbers it has seen. For each number, it calculates its complement (target - current number) and checks if this complement is in the set. If the complement is found, it means we have found a pair that adds up to the target, and the function returns true. If we finish iterating through the array without finding such a pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  }

