class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        k1 = m-1
        k2 = n-1
        k = m+n-1
        while(( k1 >= 0 ) and (k2 >= 0)):
            if (nums1[k1] > nums2[k2]):
                nums1[k] = nums1[k1]
                k1 -= 1
                k -= 1
            else:
                nums1[k] = nums2[k2]
                k -= 1
                k2 -= 1
        while (k2 >= 0):
            nums1[k2] = nums2[k2]
            k2 -= 1
