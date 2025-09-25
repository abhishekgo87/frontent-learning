// const coding = ["js", "ruby", "java", "python" , "cpp"]

// const values =  coding.forEach( (item)  => {
//      console.log(item);
// })
  
// console.log(values);

const myNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const  newNums = myNums.filter( (num)  => {
//          return num > 4
// })

// const newNums  = []

// myNums.forEach( (nums)  => {
//   if (num > 4) {
//       newNums.push(num)
//   } 
// })
// console.log(newNums);

const myNumers = [1, 2 ,3,  4, 5 ,6 ,6 ,7 ,8 ,9]

const newNums = myNumers.map( (num) => { return num + 10})
//  console.log(newNums);

const myNums = [1, 2 ,3 ]


const myTotal = myNums.reduce(function  (acc, currval) {
  return acc + currval
}, 0)

console.log(myTotal);