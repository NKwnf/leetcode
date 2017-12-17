/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var zero = -1;
    var two = nums.length;
    var temp = -1;
    for (var i = 0; i < two; ){
        if (nums[i] == 1){
            i++;
        }
        else if (nums[i] == 2){
            two--;
            temp = nums[two];
            nums[two] = nums[i];
            nums[i] = temp;
        }
        else{
            zero++;
            temp = nums[zero];
            nums[zero] = nums[i];
            nums[i] = temp;
            i++
        }
    }
};
