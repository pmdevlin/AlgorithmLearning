// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// recursive solution for merge two lists

class ListNode {
  constructor() {
    // this.val = (val===undefined) ? 0 : val);
    // this.next = (next===undefined) ? 0 : next);
  }
}

const mergeTwoLists = (list1, list2) => {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
};

console.log(mergeTwoLists(list1, list2));
