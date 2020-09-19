const findPivot = (item, index, array) => item > array[index+1]
const prePivotIndex = arr => arr.findIndex(findPivot) 
const nextGreater = (arr, than) => arr.findIndex(n => n > than)

const tempName = (arr) => {

  let reversedArr = arr.reverse()
  const pivotIndex = prePivotIndex(reversedArr) + 1
  let pivot = reversedArr[pivotIndex]
  
  const leftSide = reversedArr.slice(pivotIndex+1 )
  const rightSide = reversedArr.slice(0, pivotIndex)
  const greaterIndex = nextGreater(rightSide, pivot)
  const Greater = reversedArr[greaterIndex]

  rightSide[greaterIndex] = pivot
  pivot = Greater

  let emptyArr = [...rightSide.reverse(), pivot, ...leftSide]
  if (rightSide.length < 1) return -1
  
  return parseInt(emptyArr.reverse().join(""))
  
  }

const nextBigger = n =>{
  let numArr = n.toString()
    .split("")
    .map(x => parseInt(x))
  
  if(numArr.length < 2) return -1
  
  return tempName(numArr)
}
  
