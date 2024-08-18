package main

// groupAnagrams groups anagrams together in a bidimensional slice.
// Example: ["eat", "tea", "tan", "ate", "nat", "bat"] -> [["eat","tea","ate"],["tan","nat"],["bat"]]
// Time complexity: O(n * m) where n is the number of words and k is the length of the longest word.
// Space complexity: O(n * m) where n is the number of words and k is the length of the longest word.
func groupAnagrams(words []string) [][]string {
	// map to group words by their character frequency key
	// key is a 26 element array representing the alphabet letters
	anagramGroups := make(map[[26]int][]string)

	for _, word := range words {
		// create a character frequency key for the word
		charFrequency := getCharFrequencyKey(word)
		anagramGroups[charFrequency] = append(anagramGroups[charFrequency], word)
	}

	var result [][]string

	// collect all anagram groups into a slice
	for _, group := range anagramGroups {
		result = append(result, group)
	}

	return result
}

// getCharFrequencyKey generates a key based on character frequencies
func getCharFrequencyKey(word string) [26]int {
	var frequency [26]int // 26 letters in the alphabet
	for _, char := range word {
		// characters are represented by their Unicode code points (which are essentially integer values).
		// For example, the character 'a' has a Unicode code point value of 97, 'b' is 98, and so on.
		// The expression char - 'a' calculates the difference between the Unicode code point of char and the Unicode code point of 'a'.
		// This difference is used as an index to increment the corresponding element in the frequency array.
		// For example, if char is 'a', then char - 'a' is 97 - 97 = 0, so frequency[0] is incremented.
		// If char is 'b', then char - 'a' is 98 - 97 = 1, so frequency[1] is incremented.
		frequency[char-'a']++
	}
	return frequency
}
