/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var l = 0;
    var r = numbers.length - 1;
    while(l < r){
        if ( numbers[l] + numbers[r] == target){
            var res = new Array(++l,++r);
            return res;
        }
        if ( numbers[l] + numbers[r] < target){
            l++;
        }
        if ( numbers[l] + numbers[r] > target){
            r--;
        }
    }
};
