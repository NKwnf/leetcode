class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        k = 0
        temp = 0
        for i in range(0, len(nums)):
            if (nums[i]):
                temp = nums[i]
                nums[i] = nums[k]
                nums[k] = temp
                k += 1
