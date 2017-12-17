/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] != nums[k]){
            k++;
            nums[k] = nums[i];
            // k++;
        }
    }
    return k + 1;
};
