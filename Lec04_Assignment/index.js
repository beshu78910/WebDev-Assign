// 1. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let start=0,i = 0;
    let length = 0;
    // 1st: 0 < s.length 6
    while (i < s.length) {
        // check if set has the same character
        if (!set.has(s.charAt(i))) {
            // if it does not has that character add that
            // in the set
            set.add(s.charAt(i));
            // Keep track of the length 
            length = Math.max(set.size, length);
            i++; // increment to move to next char
            // console.log(set);
        } else {
            // if in a case where there is duplicate element
            // delete the first elem.
            set.delete(s.charAt(start));
    
            start++; //increment start position by one.
        }
    }
    return length;
};

// // 2. Implement strStr()
// var strStr = function (haystack, needle) {
//     // if needle is empty return 0;
//     if (needle === '') return 0;
//     // else take the needle from haystack using split
//     const split = haystack.split(needle);
//     // return the length of the string if needle is more than 1
//     // else return -1
//     if (split.length > 1) {
//         return split[0].length
//     } else {
//         return -1;
//     }
// };
function strStr(haystack, needle) {
    const split = haystack.split(needle);
    if (needle = '') {
        return 0;
    } 
    if (split.length > 1) {
        return split[0].length
    } else {
        return -1;
    }
}

// // 3. FizzBuzz 
// var fizzBuzz = function(n) {
//     let testArr = [];
// 	for (let i = 1; i <= n; i++) {
// 		if (i % 3 === 0 && i % 5 !== 0) {
// 			testArr.push('Fizz');
// 		} else if (i % 5 === 0 && i % 3 !== 0) {
// 			testArr.push('Buzz');
// 		} else if ((i % 3 === 0) && (i % 5 === 0)) {
// 			testArr.push('FizzBuzz');
// 		} else {
// 			testArr.push(''+i+'');
// 		}
// 	}
// 	return testArr;
// };

// 4. Implement isEqual method

// var isEqual = function (obj1, obj2) {
//     let value1 = Object.values(obj1);
//     let value2 = Object.values(obj2);
//     let first = 0;
//     let store1,store2, store4, store3;
//     for (let i = 0; i <= value1.length; i++){
//         store1 = value1[first][first];
//       store2 = value1[first][i];
    
      
//     } 
//     for (let j = 0; j <= value2.length; j++){
//         // console.log(value2[first][j]);
//         // console.log(value2[j]);
//         store3 = value2[first][first];
//         store4 = value2[first][j];
        
       
//     }
//     if (store1 === store3 && store2 === store4) {
//         return true;
//     } else {
      
//         return false;
//     }
   
//     }

