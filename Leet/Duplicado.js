/*
Given an integer array nums, return true if any 
value appears at least twice in the array, and return false if every element is distinct.*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set(); //Set -> Arregl sin indice, util cuando quiero guardar cosas sin indice
  for (i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }
  return false;
};

console.log(containsDuplicate());
