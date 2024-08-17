package main

// twoSum returns the indices of the two numbers such that they add up to a specific target.
// Time complexity: O(n)
// Space complexity: O(n)
func twoSum(nums []int, target int) []int {
    numsIndex := make(map[int]int, len(nums))

    for i, num := range nums {
        desiredNum := target - num

        j, ok := numsIndex[desiredNum]

        if ok && i != j {
            return []int{i, j}
        }

		numsIndex[num] = i
    }

    return []int{}
}