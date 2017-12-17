/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // console.log(nums)
    var k = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i]){
            if (i != k){
                var temp;
                temp = nums[i];
                nums[i] = nums[k];
                nums[k] = temp;
                // console.log(nums);
                k++;
            }
            else{
                k++;
            }
            
        }
    }

};

