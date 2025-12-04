




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// Function to calculate tax (10% tax rate)
function calculateTax(amount) {
    return amount * 0.10;  
}

// Function to convert to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();  
}

// Function to find maximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;  
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
    const cleaned = word.tolowerdcase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;  
}

// Function to calculate discounted price
function calculateDiscountedPrice(oringinalPrice, discountPercentage) {
    const discountAmount = oringinalPrice * (discountPercentage / 100);
    return oringinalPrice - discountAmount;  
}

module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};


