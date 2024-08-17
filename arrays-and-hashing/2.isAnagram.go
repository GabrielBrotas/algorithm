package main

/*
- string is a sequence of bytes
- byte is an alias for uint8
- rune is an alias for int32, unicode character might be more than 1 byte, useful when dealing with non-ascii characters
*/
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	chars := make(map[rune]int)

	// for each character in s, increment the count
	for _, v := range s {
		chars[v]++
	}

	// for each character in t, decrement the count
	for _, v := range t {
		chars[v]--
	}

	// check if all letters in map is 0
	for _, v := range chars {
		if v != 0 {
			return false
		}
	}

	return true
}
