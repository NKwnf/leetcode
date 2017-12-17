/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if (nums.length < 3){
        return nums.length;
    }
    var k = 1;
    var flag = 1;
    var pre = nums[0];
    for ( var i = 1; i < nums.length; i++){
        if (nums[i] == pre){
            flag ++;
            if (flag <= 2){
                k++;
                nums[k-1] = nums[i];
            }
        }
        else{
            flag = 1;
            k++;
            pre = nums[i];
            nums[k-1] = nums[i];
        }
    }
    return k;
};
