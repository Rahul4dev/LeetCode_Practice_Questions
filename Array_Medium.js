// 189. Array Rotation
// Problem link :  https://leetcode.com/problems/rotate-array/
// O(n)T  and O(n)S
function rotateRight(a,k) {
  let popped = [];
  let count = 0;
  k = k % a.length;
  for(i=0; i<k; i++){
    popped.push(a.pop()); 
    count++;
  }  
  console.log(count);
  popped.reverse();
  a = popped.concat(a);
  return a;     
 }
let a = [1,2,3,4,5,6,7,8,9];
console.log(rotateRight(a,109));

// OR a better algorithm in terms of Space Complexity::   O(n)T  and O(1)S
const rotateArray = function (array, k) {
    const length = array.length;
    k = k%length;
    const temp = array.slice(length-k);    
    for(let i=length-k-1; i>=0; i--){
        array[i+k]= array[i];        
    }                // [1,1,2,3,4]    
    for(let i=0;i<k;i++){
        array[i]= temp[i];        
    }                // [5, 1, 2, 3, 4]    
    return array;
}

let a = [1,2,3,4,5];
console.log(rotateArray(a,6));

// Also we can do.. by creating our own custom reverse fuction/method to reverse the array.
const reverse = function (nums,start,end){  // if nums is [1,2,3,4]
    while(start<end){
        // swapping the extreame values
        [nums[start], nums[end]]  = [nums[end], nums[start]];
        start++;
        end--;
    }  
}
// it also have same complexity as before but its runtime is better as we have filled the reverse function before hand in the Ececution context.
const arrayRotation = function (array,k){
    k = k % array.length;   // so that we  iterate only those times which is reqd.
    // array = array.reverse(); but we have build our own func.
    reverse(array,0, array.length -1);  // [5,4,3,2,1]
    // start = 0, end = k-1
    reverse(array,0, k-1);  // [4,5,3,2,1]
    // start = k, end = length -1
    reverse(array,k, array.length-1); // desired array [4,5,1,2,3]
    return array;
}

let a = [1,2,3,4,5];
arrayRotation(a,123);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// line Area problem: 11. Container With Most Water
// here we have to find the maxArea which can contain most water, go through the problem...
// https://leetcode.com/problems/container-with-most-water/ 

// this solution was my first attempt for the algo. so just applied bruteForce:

// O(n2)T  and O(n)S   complexities are not good, I know!!
const lineArea = function (hArray) {
    // height of the line will be value of the index
    let result = 0;
    let area = [];
    for(let i=0; i<hArray.length-1; i++){
        for(let j=1; j<hArray.length; j++){
          if(hArray[i] >= hArray[j]) {
             area.push(hArray[j]*(j-i)); 
          } else {
             area.push(hArray[i]*(j-i)); 
          }                 
        }      
    }
    result = Math.max(...area);
    return result;
}

let a = [3,7,5,6,8,4];
console.log(lineArea(a));  // 21

// then my second attempt to simplify the code, and got small victory over space complexity:

// O(n2)T  and O(1)S
const maxArea = function (array) {
    let area = 0;
    for(let i=0; i<array.length-1; i++){
        for(let j=1; j<array.length; j++){
            const height = Math.min(array[i],array[j]);
            const width = (j-i);
            area = Math.max(area,height*width);
        }
    }
    return area;
}

let a = [3,7,5,6,8,4];
console.log(maxArea(a));  // maxArea: 21

// At last my final attempt to solve the problem, acheived best complexity possible,
// Here double pointers are used to iterate over and decrease the time complexity to n.

// O(n)T  and O(1)S
const lineArea = function(array) {
    let pointerL = 0;
    let pointerR = array.length-1;
    let maxArea = 0;
    while(pointerL < pointerR) {
        let width = pointerR - pointerL;
        let height = Math.min(array[pointerL],array[pointerR]);
        let newArea = height*width;
        
        if(array[pointerL] >= array[pointerR])  pointerR--;           
        else pointerL++             
        
        if( maxArea < newArea) maxArea = newArea;              
    }
    return maxArea;    
}

let a = [3,7,5,6,8,4];
let b = [9,1,2,3,4,10];
lineArea(b);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

//












