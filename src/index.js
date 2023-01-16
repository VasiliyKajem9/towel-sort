
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ans = [];

  if(!matrix) {
    return []
  }

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 == 0) {
      ans.push(...matrix[i])
    }else ans.push(...matrix[i].reverse())
  }
  return ans;
}
