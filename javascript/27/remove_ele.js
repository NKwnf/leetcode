/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var k = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] != val){
            // // if (i != k){
            nums[k] = nums[i];
            k++; 
            // // }
            // else{
                // k++;
            // }
            
        }
    }
    return k;
};
