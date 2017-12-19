class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if len(nums) < 2:
            return len(nums)
        l = 0
        r = len(nums) - 1
        # pre = nums
        while (1):
            ind = Solution.position(self, l ,r , nums)
            if (ind == k-1):
                return nums[ind]
            elif ind > k-1:
                r = ind -1
            else:
                l = ind + 1
    
    def position(self, l, r, pre):
        # begin = pre[l-1]
        begin = l + 1
        temp = 0
        while (begin <= r):
            if pre[begin] < pre[l]:
                if pre[l] < pre [r]:
                    temp = pre[r]
                    pre[r] = pre[begin]
                    pre[begin] = temp
                    # begin += 1
                    # r -= 1
            if (pre[begin] >= pre[l]):
                begin += 1
            if (pre[l] >= pre[r]):
                r -= 1
        temp = pre[l]
        pre[l] = pre[r]
        pre[r] = temp
        return r 
                
