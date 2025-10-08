// let arr = [10 , 20 , 30 , 40 , 50];
// let temp = new Array(arr.length);

// let j = 0

// for (let i = arr.length-1; i>=0; i--){
//   temp[j] = arr[i];
//   j++
// }
// console.log(temp);
// let arr = [10 , 20 , 30 , 40 , 50];

// let i = 0, j = arr.length-1;

// while(i!=j){
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
//   i++
//   j--
// }
// console.log(arr);

// let arr = [1 , 1 , 0 , 1 , 0 , 1 , 1, 0, 0];

// let i = 0 , j = 0;
// while(i<arr.length){
//   if(arr[i] == 0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp;
//     j++
//   }
//   i++
// }
// console.log(arr);   

// let arr = [5 , -6, 7 , 8, -3 ,4 ,-3];


// let i = 0 , j = 0;
// while(i<arr.length){
//   if(arr[i] <=  0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//   }
//   i++
// }
// console.log(arr)
// let arr = [1 ,2 ,3 ,4 ,5]

// let copy = arr[0];
// for(let i=0; i<arr.length-1; i++){
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1]  = copy
// console.log(arr);

// let arr = [1 , 2 , 3 ,4 , 5]
// let copy = arr[arr.length-1];
// for(let i= arr.length-1; i>0; i-- ){
//   arr[i] = arr[i-1];
 
// }
//  arr[0] = copy

// console.log(arr)
  let arr = [1 ,2 ,3 ,4 ,5]
 let k = Number(prompt("Enter k value"))

for (let j = 0 ;  j < k; j++){
  let copy = arr[arr.length-1]
 for(let i= arr.length-1; i>0; i--){
   arr[i] = arr[i-1];
 
}
  arr[0] = copy
  
  


}
console.log(arr);