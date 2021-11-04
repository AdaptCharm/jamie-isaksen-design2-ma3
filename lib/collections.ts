/**
 * Return an array of key/value pairs, filtered by value.
 * @param items The array of objects.
 * @param string The value to search for in the key/value pairs.
 */
export const filterByValue = <T extends object>(
  items: T[],
  string: string | number
): T[] => {
  return items.filter((item) => Object.values(item).includes(string))
}

/**
 * Return a boolean whether a string is duplicate.
 * @param string The value to check.
 */
export const stringIsDuplicate = (string: string) => {
  return new Set(string.split('')).size === string.length
}
