/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var pri = nums[0];
    var l = 0;
    var r = nums.length - 1;
    while(1){
        var val = position(r,l,nums);
        // console.log(nums);
        if (val == k-1){
            return nums[val];
        }
        else if(val < k-1){
            l = val + 1;
        }
        else{
            r = val - 1;
        }
    }

};

function position(r, l, nums){
    var left = l + 1;
    while (left <= r){
        if (nums[l] > nums[left] && nums[l] < nums[r]){
            var tmp = nums[r];
            nums[r] = nums[left];
            nums[left] = tmp;
            // var c = swap(nums[left], nums[r]);
            // nums[left] = c[0];
            // nums[r] = c[1];
        }
        if (nums[l] <= nums[left]){
            left++;
        }
        if (nums[l] >= nums[r]){
            r--;
        }
    }
    var tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    // c = swap(nums[l],nums[r]);
    // nums[l] = c[0];
    // nums[r] = c[1];
    return r;
}

// function swap(a,b){
//     return [b,a];
// }








