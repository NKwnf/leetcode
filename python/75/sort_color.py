class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        zero = -1
        two = len(nums)
        i = 0
        temp = 0
        while(i < two):
            if nums[i] == 1:
                i += 1
                # continue
            elif nums[i] == 2:
                two -= 1
                temp = nums[two]
                nums[two] = nums[i]
                nums[i] = temp
                # continue
            else:
                zero += 1
                temp = nums[zero]
                nums[zero] = nums[i]
                nums[i] = temp
                i += 1
                # continue
        
                
