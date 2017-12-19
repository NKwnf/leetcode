class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) < 3:
            return len(nums)
        k = 1
        flag = 1
        pre = nums[0]
        for i in range(1, len(nums)):
            if pre == nums[i]:
                flag += 1
                if flag <= 2:
                    k += 1
                    nums[k-1] = nums[i]
            else:
                k += 1
                flag = 1
                pre = nums[i]
                nums[k-1] = nums[i]
                    
                
                    
        return k
                # if flag == 1:
