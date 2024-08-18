package main

import "log"

func main() {
	// nums := []int{1, 2, 3, 4, 4, 6, 7, 8, 9, 10}
	// containsDuplicate(nums)

	// 3. two sum
	// nums := []int{2,7,11,15}
	// target := 9
	// twoSum(nums, target)

	// 4. group anagrams
	strs := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
	log.Println(groupAnagrams(strs))

}
