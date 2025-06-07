/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let str = x.toString().split("").reverse().join("")
   let str1=x.toString()
   if(str==str1){
    return true;
   }
   else{
    return false;
   }
};