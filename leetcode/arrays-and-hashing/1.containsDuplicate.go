package main

// containsDuplicate checks if the given array contains any duplicates.
// Time complexity: O(n)
// Space complexity: O(n)
func containsDuplicate(nums []int) bool {
	// Create a map to store the existing values.
	existingValues := make(map[int]bool, len(nums))

	for _, n := range nums {
		if existingValues[n] {
			return true
		}
		existingValues[n] = true
	}

	return false
}
