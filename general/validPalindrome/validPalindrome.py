class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        stringLower = s.lower()

        cleanString = ''.join([c for c in stringLower if c.isalnum()])

        return cleanString == cleanString[::-1]

        if cleanString == reverseString:
            return True
        else:
            return False
