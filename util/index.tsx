//Generic function to remove duplicate values from an array.
export function removeDuplicates<Type>(array: Type[]): Type[] {
  const noDuplicates = [...new Set(array)];

  return noDuplicates;
}
