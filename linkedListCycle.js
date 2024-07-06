class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function checkIfCycleExists(head) {
    // an empty list or list with one node cannot have a cycle
    if (head === null || head.next === null) {
        return false
    }
    //two pointers start at head
    let slow = head
    let fast = head
    //Slow pointer moves once, while fast pointer moves twice through the list
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        //Slow and fast meeting = cycle
        if (slow === fast) {
            return true
        }
    }
    return false
}

let headNode1 = new ListNode("A")
let nodeB1 = new ListNode("B")
let nodeC1 = new ListNode("C")

headNode1.next = nodeB1
nodeB1.next = nodeC1
nodeC1.next = headNode1

let headNode2 = new ListNode("1")
let nodeB2 = new ListNode("2")
let nodeC2 = new ListNode("3")

headNode2.next = nodeB2
nodeB2.next = nodeC2
nodeC2.next = null

let headNode3 = new ListNode("1")
let nodeB3 = new ListNode ("2")
let nodeC3 = new ListNode ("3")

headNode3.next = nodeB3
nodeB3.next = nodeC3
nodeC3.next = headNode3

console.log (checkIfCycleExists(headNode1))
console.log (checkIfCycleExists(headNode2))
console.log (checkIfCycleExists(headNode3))
