/* Print two integers on two different lines:
The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house. */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleTreePosition = a;
  let arrOfApples = apples;
  let orangeTreePosition = b;
  let arrOfOranges = oranges;
  let houseStartPoint = s;
  let houseEndPoint = t;

  let countApples = 0;
  for (let i of arrOfApples) {
    if (
      i + appleTreePosition >= houseStartPoint &&
      i + appleTreePosition <= houseEndPoint
    )
      countApples++;
  }


  let countOranges = 0;
  for(let j of arrOfOranges) {
      if(j + orangeTreePosition >= houseStartPoint && j + orangeTreePosition <= houseEndPoint) countOranges++;
  }


  console.log(countApples + "\n" + countOranges);
}

console.log(
  countApplesAndOranges(0, 3, -5, 4, [4, 6, -1, 2, 3], [3, -2, -1, 0])
);
