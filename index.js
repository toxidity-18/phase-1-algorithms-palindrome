function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}


console.log(isPalindrome("madam"));     
console.log(isPalindrome("robot"));     
console.log(isPalindrome("racecar"));   
console.log(isPalindrome("level"));    
 console.log(isPalindrome("palindrome"));

if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
