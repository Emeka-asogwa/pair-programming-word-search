const wordSearch = (letters, word) => {
  //Transposing Array for vertical search
  const verticalArr = [];

  for (let row in letters[0]) {
    let tmpArr = [];
    for (let column in letters) {
      tmpArr.push(letters[column][row]);
    }
    verticalArr.push(tmpArr);
  }

  //Joining each array set for word check
  const verticalJoin = verticalArr.map((c) => c.join(""));
  const horizontalJoin = letters.map((ls) => ls.join(""));

  //Word Check for horizontal && backward
  for (l of horizontalJoin) {
    if (l.includes(word) || l.split("").reverse().join("").includes(word))
      return true;
  }
  //Word Check for vertical && backward
  for (l of verticalJoin) {
    if (l.includes(word) || l.split("").reverse().join("").includes(word))
      return true;
  }

  //default return
  return false;
};

module.exports = wordSearch;